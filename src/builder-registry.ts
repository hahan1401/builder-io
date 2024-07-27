"use client";
import { builder, Builder } from "@builder.io/react";
import Carousel from "./components/ui/Carousel";
import Counter from "./components/Counter/Counter";
import ImageWithText from "./components/ImageWithText/ImageWithText";
import MyComponent from "./components/MyComponent/MyComponent";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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

Builder.registerComponent(Carousel, {
  name: "Carousel",
  inputs: [
    {
      name: "autoPlay",
      type: "boolean",
    },
    {
      name: "centerMode",
      type: "boolean",
    },
    {
      name: "data",
      type: "string",
      required: true,
    },
    {
      name: "responsive",
      type: "boolean",
    },
    {
      name: "slidesToShow",
      type: "number",
    },
  ],
});
