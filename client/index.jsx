import React from "react";
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

console.log("hello");
const root = createRoot(document.getElementById('root'));
root.render (
	<div>
		<App/>
	</div>
);
/*<App/>*/