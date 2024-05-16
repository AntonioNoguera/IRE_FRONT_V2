import React from 'react';
import ReactDOM from 'react-dom/client';

import MadeRouter from './components/MadeUpRouter/MadeRouter'
import RouterPaths from './RouterPaths';

import { motion } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }} >
			<MadeRouter routes={RouterPaths} />
		</motion.div>
	</React.StrictMode>
);
