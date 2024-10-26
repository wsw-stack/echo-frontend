import { Input } from './layouts/InputPage/Input';
import { Output } from './layouts/OutputPage/Output';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
	return (
		<Router>
            <Routes>
                <Route path="/" element={<Navigate to="/input" replace />} />
                <Route path="/input" element={<Input />} />      
                <Route path="/output" element={<Output />} /> 
            </Routes>
        </Router>
	);
}
