import React from 'react';
import ReactDOM from 'react-dom/client';

import MadeRouter from './components/MadeUpRouter/MadeRouter'
import RouterPaths from './RouterPaths';

import { motion } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<motion.div
            initial={{  filter: 'brightness(50%)'}}
            animate={{  filter: 'brightness(100%)'}}
            transition={{ duration: .5,delay:1}}
        >
			<MadeRouter routes={RouterPaths} />
		</motion.div>
	</React.StrictMode>
);
