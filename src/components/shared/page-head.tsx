import { Helmet } from 'react-helmet-async';

export default function PageHead({ title = 'Dashboard' }) {
    return (
        <Helmet>
            <title> {title} </title>
        </Helmet>
    );
}