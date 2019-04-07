# mass-militarization

How does increased militarization of Massachusetts police forces affect policing? This is a page visualizing some information on this question.

## developer guide

This is a single web page. Current libraries in use, all linked from the `index.html` page:

* [Spectre.css](https://picturepan2.github.io/spectre/index.html) to provide nice basic styling and some UI components
* [Google Fonts](https://fonts.google.com/) for the header font
* [jQuery](https://jquery.com/) because it makes JavaScript even easier
* [D3.js](https://d3js.org/) to load the data and create charts

What's in this directory:

```markdown
.
+-- data            # data files
|    +-- mpm_data.csv
|
+-- app.js          # script for data processing and visualizing with d3
+-- index.html      # the web page content
+-- README.md       # the file you're reading
+-- style.css       # additional CSS as needed
```

## TODO

- [ ] Create initial chart or charts from mpm_data
- [ ] Add additional militarization/police data
- [ ] Add more understandable text/prose content
- [ ] Render data in searchable table
- [ ] Integrate data about outcomes - arrests, fatalities, overpolicing, etc

Nice to haves

- [ ] Add new Code for Boston branding