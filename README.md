## Description

This project is a very simple, barebones frontend for a blog, built simply to understand and familiarize myself with Azion, a new platform for edge-computing.

The backend is mocked by [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Tech Stack

- **Azion**: Brazilian platform that provides CDN, edge computing and security services for high-performance and scalability. You can learn more about Azion [here](https://www.azion.com/en/)
  - Azion automatically creates Github actions that handle CI/CD, and an Angular boilerplate project.
  - The Azion command line is used to build (`azion build`) and test locally (`azion dev`).
- **Angular**: _The_ frontend framework. This blog is built with Angular 18.
- **Typescript**: Typescript is a Javascript superset - more robust, intuitive and powerful.

## How it works:

Once a PR is merged, Azion's custom Github Actions will kick in to handle the deployment.

## Static site rendering/generation

This project also uses the angular package `@angular/ssr` for _static site rendering/generation_. SSG/SSR is a method of generating pages at build times instead of runtime, thus improving load times, security, availability, etc. In this case, only two blog posts (ids 1 and 2) are SSG'ed.

Build time rendering doesn't really makes sense for a dynamic, constantly updated blog, since that would imply at every new post, a new build would have to be made, but since this is a simple learning project, I chose two posts to statically serve. A more appropriate use for this feature could be portfolios (my mind goes to art and 3D modeling portfolios), documentations, e-commerce, etc.

---

# Angular Boilerplate

With the **Angular Boilerplate**, you can simplify and enhance the deployment of Angular applications directly on the edge of the network. This template provides an automation solution that encapsulates several steps, from repository management to edge deployment, accelerating and simplifying your workflow.

This repository is an example of the new GitHub repository created during the deployment. For a more detailed step-by-step to deploy this template through Azion's platform, check the [How to deploy edge applications with the Angular Boilerplate](https://www.azion.com/en/documentation/products/guides/angular-boilerplate/) guide.

This template uses Angular CLI version `18.2.11`.

---

## Requirements

Before using this template, you need to:

- Have a [GitHub account](https://github.com/signup).
  - Every push will be deployed automatically to the main branch in this repository to keep your project updated.

> **Note**: this template uses [Edge Functions](https://www.azion.com/en/documentation/products/build/edge-application/edge-functions/) and it could generate usage-related costs. Check the [pricing page](https://www.azion.com/en/pricing/) for more information.

---

## Deploy your own

Deploy your own Angular project with Azion.

[![Deploy Button](https://www.azion.com/button/)](https://console.azion.com/create/angular/angular-boilerplate "Deploy with Azion")

For a more detailed step-by-step, check the [documentation](https://www.azion.com/en/documentation/products/guides/angular-boilerplate/).
