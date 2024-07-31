"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import HeroSection from "./components/HeroSection/HeroSection";
import ImageWithText from "./components/ImageWithText/ImageWithText";
import MyComponent from "./components/MyComponent/MyComponent";
import ProductItem from "./components/ui/ProductItem";
import SectionTitle from "./components/ui/SectionTitle";
import ShoppingButton from "./components/ui/ShoppingButton";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register("editor.settings", {
  designTokens: {
    color: [
      { name: "text-primary", value: "#000" },
      { name: "text-secondary", value: "#fff" },
    ],
  },
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ImageWithText, {
  name: "ImageWithText",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "imageSrc",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(MyComponent, {
  name: "MyComponent",
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  inputs: [
    {
      name: "data",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(SectionTitle, {
  name: "SectionTitle",
  inputs: [
    {
      name: "color",
      type: "string",
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ShoppingButton, {
  name: "ShoppingButton",
  inputs: [
    {
      name: "href",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(ProductItem, {
  name: "ProductItem",
  inputs: [
    {
      name: "item",
      type: "string",
      meta: {
        ts: "any",
      },
      required: true,
    },
  ],
});
