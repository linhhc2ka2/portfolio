import React from 'react';
import classNames from 'classnames/bind';

// Bootstrap
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

// ------
import styles from './index.module.scss';
import * as Icons from '~/components/Icons';
import * as Images from '~/assets/Images';

const cx = classNames.bind(styles);

function Home() {
    return (
        <Row className={cx('align-items-center py-4', 'px_default')}>
            <Col sm={'12'} className={cx('text-start')}>
                <h2 className={cx('mb-5')}>Xin chào, tôi là một lập trình viên Front-end.</h2>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={10} className={cx('border-start')}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    Tôi là một sinh viên mới tốt nghiệp bước vào lĩnh vực lập trình frontend. Đam mê tạo
                                    giao diện người dùng tương tác và hấp dẫn trực quan, tôi có nền tảng vững chắc về
                                    HTML, CSS và JavaScript. Mặc dù là sinh viên mới ra trường nhưng tôi đã tích cực
                                    theo đuổi các cơ hội tự học và tích lũy kinh nghiệm thực tế với các frontend
                                    framework phổ biến như ReactJS và AngularJS. Với khả năng học hỏi nhanh và tư duy
                                    chủ động, tôi mong muốn áp dụng kiến ​​thức của mình và cộng tác với các chuyên gia
                                    có kinh nghiệm để xây dựng các ứng dụng web sáng tạo. Dành riêng cho sự phát triển
                                    liên tục, tôi đặt mục tiêu đóng góp cho ngành bằng cách cung cấp trải nghiệm người
                                    dùng liền mạch và luôn cập nhật các công nghệ giao diện người dùng mới nhất.
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className={cx('d-flex align-items-center')}>
                                        <Icons.School fill={'#fff'} />
                                        <h3 className={cx('fw-bold m-0 ps-3')}>
                                            Trường cao đẳng thực hành FPT Polytechnic Cần Thơ
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>
                                            Thời gian: <small className={cx('fst-italic ps-2')}>2019 - 2022</small>
                                        </li>
                                        <li>
                                            Chuyên ngành:
                                            <small className={cx('fst-italic ps-2')}>
                                                Công nghệ thông tin - Ứng dụng phần mềm
                                            </small>
                                        </li>
                                        <li>
                                            GPA: <small className={cx('fst-italic ps-2')}>3.36 / 4</small>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <div className={cx('row')}>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img src={Images.default.html} alt="Img skills" width={150} height={150} />
                                            <h5 className={cx('fw-bold m-0')}>HTML</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img src={Images.default.css} alt="Img skills" width={150} height={150} />
                                            <h5 className={cx('fw-bold m-0')}>CSS</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img src={Images.default.js} alt="Img skills" width={150} height={150} />
                                            <h5 className={cx('fw-bold m-0')}>JAVASCRIPT</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img src={Images.default.react} alt="Img skills" width={150} height={150} />
                                            <h5 className={cx('fw-bold m-0')}>REACT JS</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img
                                                src={Images.default.angular}
                                                alt="Img skills"
                                                width={150}
                                                height={150}
                                            />
                                            <h5 className={cx('fw-bold m-0')}>ANGULAR JS</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img
                                                src={Images.default.bootstrap}
                                                alt="Img skills"
                                                width={150}
                                                height={150}
                                            />
                                            <h5 className={cx('fw-bold m-0')}>BOOTSTRAP</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img
                                                src={Images.default.tailwind}
                                                alt="Img skills"
                                                width={150}
                                                height={150}
                                            />
                                            <h5 className={cx('fw-bold m-0')}>TAILWIND</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img src={Images.default.java} alt="Img skills" width={150} height={150} />
                                            <h5 className={cx('fw-bold m-0')}>JAVA</h5>
                                        </div>
                                        <div className={cx('col-lg-3 col-md-4 col-sm-6 text-center mb-5')}>
                                            <img
                                                src={Images.default.github}
                                                alt="Img skills"
                                                width={150}
                                                height={150}
                                            />
                                            <h5 className={cx('fw-bold m-0')}>GITHUB</h5>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <ul>
                                        <li>Tin học văn phòng</li>
                                        <li>Kỹ năng làm việc nhóm</li>
                                        <li>Kỹ năng làm việc độc lập</li>
                                        <li>Kỹ năng tự học và học hỏi nhanh</li>
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        <Col sm={2} className={cx('border-start')}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className={cx('text-white')}>
                                        Giới thiệu về bản thân
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className={cx('text-white')}>
                                        Học vấn
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three" className={cx('text-white')}>
                                        Kỹ năng chuyên môn
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four" className={cx('text-white')}>
                                        Kỹ năng mềm
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </Row>
    );
}

export default Home;
