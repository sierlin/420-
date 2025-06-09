// Demo configuration file
// import { fas } from "@fortawesome/free-solid-svg-icons";
import iconPlugin from "../plugin.js";

// You can use `sets` to pass in your own icon sets
// Or, you can add to library directly in your configuration file
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);
export default function(eleventyConfig) {
	eleventyConfig.addPlugin(iconPlugin, {
		// sets: [ fas ]
	})
}
