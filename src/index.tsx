import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "Store";
import { Router } from "Router";
import "18n.ts";
import "index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(Router);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			{/*<CreateCourse />*/}
		</Provider>
	</React.StrictMode>
);
