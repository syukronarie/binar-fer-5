import React from "react";
import logoImg from "./assets/img/logo.png";
import imageCar from "./assets/img/img_car.png";
import imageService from "./assets/img/img_service.png";
import iconChecklist from "./assets/icons/icon_checklist.png";
import iconComplete from "./assets/icons/icon_complete.png";
import iconPrice from "./assets/icons/icon_price.png";
import icon_24hrs from "./assets/icons/icon_24hrs.png";
import iconProfessional from "./assets/icons/icon_professional.png";

const Homepage = () => {
	return (
		<div className="container-fluid p-0">
			<header className="bg-primary bg-opacity-10">
				<nav className="navbar navbar-expand-md">
					<div className="container-md">
						<a className="navbar-brand" href="/">
							<img
								src={logoImg}
								alt="Logo"
								className="d-inline-block align-text-top"
							/>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse flex-grow-0"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="/">
										Our Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/">
										Why Us
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="/"
										role="button"
										aria-expanded="false"
									>
										Testimonial
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/">
										FAQ
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="container">
					<div className="row align-items-center flex-column flex-md-row">
						<div className="col pb-md-5">
							<h1 className="py-3">
								Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
							</h1>
							<p>
								Selamat datang di Binar Car Rental. Kami menyediakan mobil
								kualitas terbaik dengan harga terjangkau. Selalu siap melayani
								kebutuhanmu untuk sewa mobil selama 24 jam.
							</p>
							<button type="button" className="btn btn-success">
								Mulai Sewa Mobil
							</button>
						</div>
						<div className="col p-0 text-end">
							<img src={imageCar} alt="car" className="w-100" />
						</div>
					</div>
				</div>
			</header>
			<section className="container my-5" id="our-services">
				<div className="row align-items-center flex-column flex-lg-row">
					<div className="col my-4 m-md-4 text-center">
						<img src={imageService} alt="car" width="60%" />
					</div>
					<div className="col my-4 m-md-4">
						<h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
						<p>
							Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
							lebih murah dibandingkan yang lain, kondisi mobil baru, serta
							kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
							wedding, meeting, dll.
						</p>
						<ul className="p-0">
							<li className="list-unstyled py-1">
								<img src={iconChecklist} alt="checklist" />
								<span className="px-2">
									Sewa Mobil Dengan Supir di Bali 12 Jam
								</span>
							</li>
							<li className="list-unstyled py-1">
								<img src={iconChecklist} alt="checklist" />
								<span className="px-2">
									Sewa Mobil Lepas Kunci di Bali 24 Jam
								</span>
							</li>
							<li className="list-unstyled py-1">
								<img src={iconChecklist} alt="checklist" />
								<span className="px-2">Sewa Mobil Jangka Panjang Bulanan</span>
							</li>
							<li className="list-unstyled py-1">
								<img src={iconChecklist} alt="checklist" />
								<span className="px-2">
									Gratis Antar - Jemput Mobil di Bandara
								</span>
							</li>
							<li className="list-unstyled py-1">
								<img src={iconChecklist} alt="checklist" />
								<span className="px-2">
									Layanan Airport Transfer / Drop In Out
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="container my-5" id="why-us">
				<h2 className="py-1">Why Us?</h2>
				<h4>Mengapa harus pilih Binar Car Rental?</h4>
				<div className="row flex-column flex-md-row align-items-center mt-3">
					<div className="col-md-6 col-lg-3 my-2">
						<div className="card p-2">
							<div className="card-body d-flex flex-column justify-content-center">
								<img
									src={iconComplete}
									alt="complete"
									width="32px"
									className="mb-3"
								/>
								<h5>Mobil Lengkap</h5>
								<p>
									Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
									terawat
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 my-2">
						<div className="card p-2">
							<div className="card-body d-flex flex-column justify-content-center">
								<img
									src={iconPrice}
									alt="price"
									width="32px"
									className="mb-3"
								/>
								<h5>Harga Murah</h5>
								<p>
									Harga murah dan bersaing, bisa bandingkan harga kami dengan
									rental mobil lain
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 my-2">
						<div className="card p-2">
							<div className="card-body d-flex flex-column justify-content-center">
								<img
									src={icon_24hrs}
									alt="layanan"
									width="32px"
									className="mb-3"
								/>
								<h5>Layanan 24 Jam</h5>
								<p>
									Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
									tersedia di akhir minggu
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 my-2">
						<div className="card p-2">
							<div className="card-body d-flex flex-column justify-content-center">
								<img
									src={iconProfessional}
									alt="professional"
									width="32px"
									className="mb-3"
								/>
								<h5>Sopir Profesional</h5>
								<p>
									Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
									tepat waktu
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Homepage;
