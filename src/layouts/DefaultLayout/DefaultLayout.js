import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <Container fluid>
            <Header />

            <div className={cx('main-content')}>{children}</div>
        </Container>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
