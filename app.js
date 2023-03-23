require("dotenv").config();
const Prismic = require("@prismicio/client");
const PrismicDOM = require("prismic-dom");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const errorHandler = require("errorhandler");

const path = require("path");
const app = express();
const port = 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(errorHandler());

// static files
app.use(express.static(path.join(__dirname, "public")));

// view engine setup
app.set("view engine", "pug");

// Prismic API initialization
const initApi = (req) => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
  });
};

// Link Resolver: this function will be used to generate links to Prismic.io documents
const handleLinkResolver = (doc) => {
  if (doc.type === "product") return `/detail/${doc.slug}`;
  if (doc.type === "collections") return "/collections";
  if (doc.type === "about") return "/about";
  // default to home page
  return "/";
};

// Middleware: injects prismic context to every view
app.use((req, res, next) => {
  res.locals.Link = handleLinkResolver;
  res.locals.PrismicDOM = PrismicDOM;
  res.locals.Numbers = (index) => {
    return (index =
      index == 0
        ? "One"
        : index == 1
        ? "Two"
        : index == 2
        ? "Three"
        : (index = 3 ? "Four" : ""));
  };
  next();
});

// helper function to handle async requests
const handleRequest = async (api) => {
  const meta = await api.getSingle("meta");
  const navigation = await api.getSingle("navigation");
  const preloader = await api.getSingle("preloader");
  console.log(meta);
  return {
    meta,
    navigation,
    preloader,
  };
};

// route to home page
app.get("/", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const home = await api.getSingle("home");

  // console.log(defaults);
  const { results: collections } = await api.query(
    Prismic.Predicates.at("document.type", "collection"),
    { fetchLinks: "product.image" }
  );
  res.render("pages/home", { ...defaults, collections, home });
});

// route to about page
app.get("/about", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const about = await api.getSingle("about");

  res.render("pages/about", { ...defaults, about });
});

// route to detail page
app.get("/detail/:uid", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const product = await api.getByUID("product", req.params.uid, {
    fetchLinks: "collection.title",
  });
  console.log(product.data.highlights);
  res.render("pages/detail", { ...defaults, product });
});

// route to collections page
app.get("/collections", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const home = await api.getSingle("home");

  const { results: collections } = await api.query(
    Prismic.Predicates.at("document.type", "collection"),
    { fetchLinks: "product.image" }
  );
  console.log(collections);
  console.log(home);
  res.render("pages/collections", { ...defaults, home, collections });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
