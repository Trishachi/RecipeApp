# Nigerian Recipe Search App

## About

A Nigerian recipe finder application built using ReactJS. This is sort of a repository of my tested and trusted Nigerian recipes which will continue to grow as I try out more recipes.

## How to Use

- Search for recipe by typing in keyword and clicking on the Search Button
- Click on View Recipe button to view recipe details
- Read about the recipe, click on view source to view detailed preparation instructions or watch video on youtube
- Click on Go Home button to return to home page

## Technologies Used

- React JS
- React Router
- Bootstrap
- Media Queries
- Local JSON Data Storage
- Git Version Control
- GitHub Deployment

## Screenshots

![alt text](./src/assets/screenshots/home.jpg "Home Page")

![alt text](./src/assets/screenshots/recipePage.jpg "Recipe Page")

## Challenges & Solutions

1. Blank screen on deployment of App to GitHub pages (when using react router)

**Findings -** GitHub pages is not smart enough to use React Router out of the box. You will need to make some slight configurations to the app routes to get your app to display on GitHub pages. This is because on deployment, GitHub by default is set to look for your app on the path _"/"_ ie _"https://username.github.io/"_ but since the main project is on _"https://username.github.io/AppName-Here"_, if finds nothing and so returns a blank page or a 404 page.

**Solution -** Use `process.env.PUBLIC_URL` in your route definitions. React Router has a basename property that can be used for setting the base URL for all locations.

```javascript
<BrowserRouter basename={process.env.PUBLIC_URL}>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/recipe/:id" component={Recipe} />
  </Switch>
</BrowserRouter>
```

**References -**

- https://github.com/facebook/create-react-app/issues/1765
- https://reactrouter.com/web/api/BrowserRouter/basename-string

2. I decided to use a simple html `iframe` instead of installing yet another `npm` package (react-youtube). I got the video frame to display, but the embedded YouTube Videos were not loading on the recipe page.

**Findings -** YouTube has some restrictions on the embedding of their site on third party sites using a YouTube watch id/url. They however offer an _"embed video"_ id/url to be used when embedding videos on external sites.

**Solution -** Instead of copying the link that comes up when the share button is clicked on a YouTube video, click on the Embed `<>` button and copy the iframe code that pops up. Be sure to use the `embed URL` with the `/embed/:videoId` link. For example, see below 👇

```
<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
```
