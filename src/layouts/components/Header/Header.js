import classNames from 'classnames/bind';

// Bootstrap
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

// ------
import styles from './Header.module.scss';
import * as Icons from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <Row className={cx('align-items-center py-4', 'px_default')}>
            <Col lg={'12'} md={'12'} sm={'12'} className={cx('text-end')}>
                <span className={cx('ms-4', 'fw_400', 'contact_link')}>
                    <Icons.Email className={cx('me-2')} fill={'#fff'} /> linhhc.1612@gmail.com
                </span>
                <span className={cx('ms-4', 'fw_400', 'contact_link')}>
                    <Icons.Phone className={cx('me-2')} fill={'#fff'} /> 0329 497 661
                </span>
                <span className={cx('ms-4', 'fw_400', 'contact_link')}>
                    <Icons.Address className={cx('me-2')} fill={'#fff'} /> Ninh Kiều - Cần Thơ
                </span>
            </Col>
            <Col>
                <hr />
            </Col>
        </Row>
    );
}

export default Header;
