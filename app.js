import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import * as prismicH from "@prismicio/helpers";
import { client } from "./prismicConfig.js";
// import Prismic from "prismic-javascript";
// const fileURLToPath = require("url").fileURLToPath;
// const prismicH = require("@prismicio/helpers");
// const client = require("./prismicConfig.js");
// import express from "express";
// import * as path from "path";
// const express = require("express");
// const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "pug");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "views")));

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.join(__dirname, "views")));
// Prismic API and DOM libraries for querying and rendering
// const Prismic = require("@prismicio/client");
// const PrismicDOM = require("prismic-dom");

// Prismic API initialization
const initApi = (req) => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
  });
};

// Link Resolver
const handleLinkResolver = (doc) => {
  return "/";
};

// Middleware
app.use((req, res, next) => {
  res.locals.ctx = {
    // endpoint: process.env.PRISMIC_ENDPOINT,
    // linkResolver: handleLinkResolver,
    prismicH,
  };
  // res.locals.PrismicDOM = PrismicDOM;
  next();
});

// Static files
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// app.get("/", (req, res) => {
//   res.render("template", {
//     meta: {
//       data: { title: "floema", description: "Metadata description." },
//     },
//   });
// });

// query for the root path
app.get("/", async (req, res) => {
  const document = await client.getFirst("");
  res.render("home", { document });
  // res.render("pages/home");
});

// app.get("/pages/about", async (req, res) => {
//   const document = await client.getFirst("about");
//   res.render("about", { document });
// });

// app.get("/about", async (req, res) => {
//   initApi(req).then((api) => {
//     api
//       .query(Prismic.predicate.at("document.type", "about"))
//       .then((response) => {
//         console.log(response);
//         res.render("pages/about", { document: response.results[0] });
//       });
//   });
// });

app.get("/detail/:uid", (req, res) => {
  res.render("pages/detail");
});

app.get("/collections", (req, res) => {
  res.render("pages/collections");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
