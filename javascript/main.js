import "../css/modern-normalize.css";
import "../css/style.css"
import "../css/header.css"
import "../css/about.css"
import "../css/navigation.css"
import "../css/tools.css"
import "../css/projects.css"
import "../css/contact.css"


import navigation from "./navigation";
import mask_intersector from "./intersectors/mask_intersector";
import fade_intersector from "./intersectors/fade_intersector";
import scale_intersector from "./intersectors/scale_intersector";
import app from "./app_load"


navigation();
mask_intersector();
fade_intersector();
scale_intersector();
app();
