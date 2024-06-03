import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

import { paymentIcons, webIcons } from '../assets/img';
import { SiYoutube, SiFacebook, SiInstagram, SiTiktok, SiZalo } from 'react-icons/si';

function Footer(props) {
    return (
        <footer className={clsx(styles.wrapper)}>
            <div className={clsx(styles.topFooter)}>
                <div className={clsx(styles.boxInfor)}>
                    <div className={clsx(styles.content)}>
                        <p className={clsx(styles.title)}>Tổng đài hỗ trợ miễn phí</p>
                        <div className={clsx(styles.linkList)}>
                            <div className={clsx(styles.link)}>
                                Gọi mua hàng <strong>1800.2097</strong> (7h30 - 22h00)
                            </div>
                            <div className={clsx(styles.link)}>
                                Gọi khiếu nại <strong>1800.2063</strong> (8h00 - 21h30)
                            </div>
                            <div className={clsx(styles.link)}>
                                Gọi bảo hành <strong>1800.2064</strong> (8h00 - 21h00)
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.content)}>
                        <p className={clsx(styles.title)}>Phương thức thanh toán</p>
                        <div className={clsx(styles.linkList, styles.icons)}>
                            {Object.keys(paymentIcons).map((key, index) => {
                                return (
                                    <div key={index} className={clsx(styles.link)}>
                                        <Link>
                                            <img src={paymentIcons[key]} alt={key} />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.boxInfor)}>
                    <div className={clsx(styles.content)}>
                        <p className={clsx(styles.title)}>Thông tin chính sách</p>
                        <div className={clsx(styles.linkList)}>
                            <div className={clsx(styles.link)}>
                                <Link>Mua hàng và thanh toán Online</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Mua hàng trả góp Online</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Chính sách giao hàng </Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Tra điểm Smember</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Xem ưu đãi Smember</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Tra thông tin bảo hành</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Tra cứu hoá đơn điện tử</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Thông tin hoá đơn mua hàng</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Trung tâm bảo hành chính hãng</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Quy định về việc sao lưu dữ liệu</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.boxInfor)}>
                    <div className={clsx(styles.content)}>
                        <p className={clsx(styles.title)}>Dịch vụ thông tin khác</p>
                        <div className={clsx(styles.linkList)}>
                            <div className={clsx(styles.link)}>
                                <Link>Khách hàng doanh nghiệp (B2B)</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Ưu đãi thanh toán</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Quy chế hoạt động</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Chính sách Bảo hành</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Xem ưu đãi Smember</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Liên hệ hợp tác kinh doanh</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Tuyển dụng</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Dịch vụ bảo hành điện thoại</Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>Dịch vụ bảo hành mở rộng</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.boxInfor)}>
                    <div className={clsx(styles.content)}>
                        <p className={clsx(styles.title)}>Kết nối với Cellphones</p>
                        <div className={clsx(styles.linkList, styles.icons)}>
                            <div className={clsx(styles.link)}>
                                <Link>
                                    <SiYoutube />
                                </Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>
                                    <SiFacebook />
                                </Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>
                                    <SiInstagram />
                                </Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>
                                    <SiTiktok />
                                </Link>
                            </div>
                            <div className={clsx(styles.link)}>
                                <Link>
                                    <SiZalo />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.content)}>
                        <p className={clsx(styles.title)}>Website thành viên</p>
                        <div className={clsx(styles.linkList)}>
                            <div className={clsx(styles.link)}>
                                <p>Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</p>
                                <img src={webIcons.dienthoaivui} alt="" />
                            </div>
                            <div className={clsx(styles.link)}>
                                <p>Trung tâm bảo hành uỷ quyền Apple</p>
                                <img src={webIcons.cares} alt="" />
                            </div>
                            <div className={clsx(styles.link)}>
                                <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>
                                <img src={webIcons.schannel} alt="" />
                            </div>
                            <div className={clsx(styles.link)}>
                                <p>Trang thông tin công nghệ mới nhất</p>
                                <img src={webIcons.sforum} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.botFooter)}>
                <div className={clsx(styles.container)}>
                    <div className={styles.boxInfor}>
                        <p>Điện thoại - Điện thoại iPhone - Điện thoại iPhone 14</p>
                        <p>Điện thoại iPhone 15 - Điện thoại iPhone 15 Pro</p>
                    </div>
                    <div className={styles.boxInfor}>
                        <p>Điện thoại Vivo - Điện thoại OPPO - Điện thoại Samsung</p>
                        <p>Back to school - Điện thoại Samsung S23 Ultra</p>
                    </div>
                    <div className={styles.boxInfor}>
                        <p>Máy tính Laptop - Laptop Acer - Laptop ASUS </p>
                        <p>Máy tính để bàn - Tivi - Tivi Samsung - Sim số đẹp</p>
                    </div>
                    <div className={styles.boxInfor}>
                        <p>Máy hút bụi - Máy hút bụi cầm tay - Robot hút bụi Ecovas</p>
                        <p>Máy lọc không khí - Máy lọc không khí Samsung</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
