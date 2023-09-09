# Datamatch Stats Project Template
Created by Howard Huang '26.

## Quick setup

```
node version: v20.4.0 (use nvm to swap versions)
npm version: 9.7.2
```

Make sure you are in the `Project-Template` folder, then run:
```
npm i
npm start
```

Navigate to `http://localhost:3000/` in your browser to view the React App.

The site will display the example visualization by default, but click the `toggle` button to see the visualization specified in `src/newViz.js`.

## Project Step 1

Pick a visualization idea

## Project Step 2

Get data that you need. Verify the formats of existing data in the firebase and possibly work with the leads to create a system to process the data into a more useful format. Reformatting can also be done on the frontend if it isn't too computationally expensive.

Add the file under `public/data` as a csv or json.

## Project Step 3

Write the Reactified D3

You should only need to modify `src/newViz.js` and `src/new.css`.

See `src/exampleViz.js` for an example.
