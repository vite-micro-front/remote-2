import { GlobalContext } from "@vite-micro-front/contracts/context";

declare global {
  interface Window {
    context: GlobalContext;
  }
}
