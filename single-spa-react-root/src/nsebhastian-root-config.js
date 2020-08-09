import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@nsebhastian/single-spa-react-app",
  app: () => System.import("@nsebhastian/single-spa-react-app"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
