import express from "express";
import bodyParser from "body-parser";
import { filterImageFromURL, deleteLocalFiles } from "./util/util";
import { Request, Response } from "express";

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8081;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get("/filteredimage", async (req: Request, res: Response) => {
    try {
      let { image_url } = req.query;

      // check image_url is sent in query params
      if (!image_url) {
        return res
          .status(400)
          .send({ message: "image url should be provided" });
      }

      // get bsolute path to a filtered image locally saved file
      const filteredpath = await filterImageFromURL(image_url);

      // return filtered image
      res.status(200).sendFile(filteredpath);

      res.on("finish", function () {
        try {
          deleteLocalFiles([filteredpath]);
        } catch (e) {
          console.log("error removing ", filteredpath);
        }
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Error while filter, and save the filtered image. Please make sure to provide a correct image url",
      });
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
