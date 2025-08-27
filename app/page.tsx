import CardSlider from "../components/CardSlider"
import FooterSection from "../components/FooterSection"
import Header from "../components/Header"
import Testimonial from "../components/Testimonial"
import WhyChooseSection from "../components/WhyChooseSection"

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="./Ellipse 13.png"
          alt=""
          className="absolute top-[35%] left-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-auto opacity-80"
        />
        <img
          src="./Ellipse 15.png"
          alt=""
          className="absolute top-[28%] right-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-auto opacity-80"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="absolute top-[28%] left-[8%] sm:left-[10%] w-8 sm:w-12 md:w-16 lg:w-20 xl:w-auto opacity-60"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="w-8 sm:w-12 md:w-16 lg:w-20 xl:w-[100px] absolute top-[28%] right-[8%] sm:right-[10%] opacity-60"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="w-6 sm:w-8 md:w-12 lg:w-16 xl:w-[50px] absolute top-[38%] right-[25%] sm:right-[30%] opacity-60"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="absolute top-[18%] left-[25%] sm:left-[30%] w-6 sm:w-10 md:w-14 lg:w-16 xl:w-auto opacity-60"
        />
        <img
          src="./Ellipse 14.png"
          alt=""
          className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-30 absolute top-[20%] left-[12%] sm:left-[16%] opacity-70"
        />
        <img
          src="./Group 63.png"
          alt=""
          className="absolute top-[25%] left-[12%] sm:left-[16%] w-12 sm:w-16 md:w-20 lg:w-24 xl:w-auto opacity-70"
        />
        <img
          src="./Group 63.png"
          alt=""
          className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-[100px] absolute top-[14%] right-[14%] sm:right-[18%] opacity-70"
        />

        <section className="bg-[#BFE2F8] rounded-b-[40px] sm:rounded-b-[80px] md:rounded-b-[120px] lg:rounded-b-[180px] pb-8 sm:pb-12 md:pb-16 lg:pb-24">
          <div className="bg-[linear-gradient(179.87deg,#2FA8CC_-19.91%,#032D89_73.02%)] rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] lg:rounded-b-[200px] overflow-hidden">
            <Header />

            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[97px] leading-[110%] sm:leading-[120%] md:leading-[130%] lg:leading-[140%] xl:leading-[150%] font-semibold text-white mb-2 sm:mb-4">
                HD FUTURE. TECH
              </h1>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white/80 font-normal mb-4 sm:mb-6 lg:mb-[-25px] max-w-4xl">
                Nơi Định Nghĩa Lại Công Nghệ Của Bạn
              </p>

              <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 mb-4 sm:mb-6">
                <div className="w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 xl:w-[75px]">
                  <img src="./logo_header.png" alt="" className="object-cover w-full" />
                </div>
                <div className="w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48">
                  <img src="./banner_logo_code.png" alt="" className="w-full object-cover" />
                </div>
                <div className="w-14 xs:w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36 mt-[-6px] sm:mt-[-8px] md:mt-[-12px] lg:mt-[-15px]">
                  <img src="./banner_logo_otp_.png" alt="" className="w-full object-cover" />
                </div>
              </div>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-5 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] w-full xs:w-auto max-w-md xs:max-w-none">
                <button className="px-4 xs:px-6 sm:px-8 lg:px-10 xl:px-12 py-2 xs:py-3 sm:py-4 rounded-full bg-white text-blue-600 font-semibold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-105 active:scale-95 transition">
                  Contact Us
                </button>
                <button className="px-4 xs:px-6 sm:px-8 lg:px-10 xl:px-12 py-2 xs:py-3 sm:py-4 rounded-full bg-[#203E80] text-white font-semibold shadow-[inset_0px_6px_7.2px_0px_rgba(108,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-110 active:scale-95 transition">
                  Chat With Us
                </button>
              </div>

              <div className="relative w-full h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32"></div>
            </div>

            <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] w-full overflow-hidden">
              <div className="absolute top-0 left-[-150px] xs:left-[-200px] sm:left-[-250px] md:left-[-300px] lg:left-[-400px] right-[-135px] xs:right-[-180px] sm:right-[-225px] md:right-[-270px] lg:right-[-360px] bottom-0">
                <img src="./Ellipse 12.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-[15%] left-[29%] right-0">
                  <img src="./connect-network.png" alt="" className="w-full max-w-none" />
                </div>
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[22%] left-[41%] w-2 xs:w-3 sm:w-4 lg:w-auto"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[40%] right-[36%] w-2 xs:w-3 sm:w-4 lg:w-auto"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[50%] left-[50%] w-2 xs:w-3 sm:w-4 lg:w-auto"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[31%] right-[45%] w-2 xs:w-3 sm:w-4 lg:w-auto"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[65%] left-[42%] w-2 xs:w-3 sm:w-4 lg:w-auto"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[20%] right-[38%] w-2 xs:w-3 sm:w-4 lg:w-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full py-3 xs:py-4 sm:py-6 lg:py-8">
        <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 px-4">
          <div className="w-16 xs:w-18 sm:w-20 md:w-24 lg:w-32 xl:w-[146px]">
            <img src="./banner_ls_logo_future.png" alt="" className="object-cover w-full" />
          </div>
          <div className="w-20 xs:w-24 sm:w-28 md:w-36 lg:w-44 xl:w-56">
            <img src="./banner_ls_logo_code.png" alt="" className="w-full object-cover" />
          </div>
          <div className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-48 xl:w-60 mt-[-6px] xs:mt-[-8px] sm:mt-[-12px] lg:mt-[-15px]">
            <img src="./banner_ls_logo_otp.png" alt="" className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#BFE2F8_0%,#FFFFFF_100%)] bg-gradient-to-b from-[#BFE2F8] to-[#FFFFFF] rounded-[40px] xs:rounded-[60px] sm:rounded-[80px] md:rounded-[120px] lg:rounded-[180px] xl:rounded-[246px] overflow-hidden z-[9999] py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="w-[95%] m-auto relative bg-white rounded-[30px] xs:rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] xl:rounded-[125px] mx-2 xs:mx-4 sm:mx-6 md:mx-8 lg:mx-14 overflow-hidden">
          <div className="absolute inset-0 left-[15%] xs:left-[20%] sm:left-[25%] md:left-[30%] lg:left-[35%] top-[-3%] xs:top-[-5%] sm:top-[-8%] lg:top-[-10%] bottom-[-6%] xs:bottom-[-8%] sm:bottom-[-12%] lg:bottom-[-15%] opacity-90">
            <img src="./Mesa de trabajo 1 3.png" alt="Illustration" className="w-full h-full object-cover" />
          </div>

          <div className="w-full lg:w-3/5 px-3 xs:px-4 sm:px-6 md:px-8 lg:pl-20 xl:pl-32 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="w-full max-w-[120px] xs:max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[450px] ml-0 xs:ml-[-15px] sm:ml-[-30px] lg:ml-[-60px]">
              <img src="./HD_logo_final.png" alt="HD FutureTech Logo" className="w-full object-cover" />
            </div>
            <div className="w-full lg:w-2/3 mt-[-15px] xs:mt-[-20px] sm:mt-[-30px] md:mt-[-35px] lg:mt-[-50px] mb-4 xs:mb-6 sm:mb-8 lg:mb-10">
              <p className="text-[#151D50] font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] leading-[1.3] xs:leading-[1.4] sm:leading-[1.5] lg:leading-[37px] mb-4 xs:mb-6 sm:mb-8 lg:mb-10">
                Our experienced project management team ensures that your projects are delivered on time, within budget,
                and according to your specifications.
              </p>
              <button className="mt-3 xs:mt-4 sm:mt-6 lg:mt-8 px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 py-2 xs:py-3 sm:py-4 rounded-full bg-[#122377] text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[37px] font-medium hover:brightness-110 active:scale-95 transition mb-6 xs:mb-8 sm:mb-12 lg:mb-14">
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 xs:mt-16 sm:mt-20 lg:mt-30 mb-4 xs:mb-6 sm:mb-8 lg:mb-10 px-4">
          <h2 className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[97px] leading-[100%] xs:leading-[104%] tracking-[0] text-[#243761]">
            Take a look at
          </h2>
          <h2 className="mt-1 font-semibold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[97px] leading-[100%] xs:leading-[104%] tracking-[0] text-[#093FB4]">
            Our Workflow About Us
          </h2>
        </div>

        <div className="my-4 xs:my-6 sm:my-8 lg:my-10 container mx-auto px-4">
          <div className="relative min-h-[400px] xs:min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[1000px]">
            <div className="text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
              <img
                src="./Group 106.png"
                alt=""
                className="object-cover w-[60px] xs:w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] m-auto"
              />
            </div>

            <div className="block lg:hidden space-y-4 xs:space-y-6">
              <div className="flex items-center gap-3 xs:gap-4 border border-[#2427BD] rounded-xl xs:rounded-2xl px-3 xs:px-4 py-2 xs:py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82]">
                <span className="text-[#243761] font-bold text-lg xs:text-xl sm:text-2xl flex-shrink-0">2025</span>
                <p className="font-normal text-xs xs:text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="flex items-center gap-3 xs:gap-4 border border-[#2427BD] rounded-xl xs:rounded-2xl px-3 xs:px-4 py-2 xs:py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82]">
                <span className="text-[#243761] font-bold text-lg xs:text-xl sm:text-2xl flex-shrink-0">2024</span>
                <p className="font-normal text-xs xs:text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="flex items-center gap-3 xs:gap-4 border border-[#2427BD] rounded-xl xs:rounded-2xl px-3 xs:px-4 py-2 xs:py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82]">
                <span className="text-[#243761] font-bold text-lg xs:text-xl sm:text-2xl flex-shrink-0">2023</span>
                <p className="font-normal text-xs xs:text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="flex items-center gap-3 xs:gap-4 border border-[#2427BD] rounded-xl xs:rounded-2xl px-3 xs:px-4 py-2 xs:py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] opacity-65">
                <span className="text-[#243761] font-bold text-lg xs:text-xl sm:text-2xl flex-shrink-0">2022</span>
                <p className="font-normal text-xs xs:text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="absolute top-[-22px] right-20 xl:right-35 w-[350px] xl:w-[400px] 2xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 xl:px-6 py-3 xl:py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:left-[-35px] after:text-4xl after:text-blue-900 after:border-l-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-xl xl:text-2xl 2xl:text-[55px] mr-4 flex-shrink-0">
                  2025
                </span>
                <p className="font-normal text-base xl:text-lg 2xl:text-[22px] leading-[24px] xl:leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="absolute bottom-[36.5%] right-32 xl:right-52 w-[350px] xl:w-[400px] 2xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 xl:px-6 py-3 xl:py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:left-[-35px] after:text-4xl after:text-blue-900 after:border-l-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-xl xl:text-2xl 2xl:text-[55px] mr-4 flex-shrink-0">
                  2023
                </span>
                <p className="font-normal text-base xl:text-lg 2xl:text-[22px] leading-[24px] xl:leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="absolute top-[30%] left-32 xl:left-52 w-[350px] xl:w-[400px] 2xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 xl:px-6 py-3 xl:py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:right-[-35px] after:text-4xl after:text-blue-900 after:border-r-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-xl xl:text-2xl 2xl:text-[55px] mr-4 flex-shrink-0">
                  2024
                </span>
                <p className="font-normal text-base xl:text-lg 2xl:text-[22px] leading-[24px] xl:leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="absolute bottom-[1%] opacity-65 left-32 xl:left-52 w-[350px] xl:w-[400px] 2xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 xl:px-6 py-3 xl:py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:right-[-35px] after:text-4xl after:text-blue-900 after:border-r-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-xl xl:text-2xl 2xl:text-[55px] mr-4 flex-shrink-0">
                  2022
                </span>
                <p className="font-normal text-base xl:text-lg 2xl:text-[22px] leading-[24px] xl:leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-b-[40px] xs:rounded-b-[60px] sm:rounded-b-[80px] md:rounded-b-[120px] lg:rounded-b-[180px] xl:rounded-b-[246px] pb-3">
          <CardSlider />
        </div>
      </section>

      <div className="relative pb-8 xs:pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <img
          src="./Ellipse 28.png"
          alt=""
          className="absolute right-0 bottom-0 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-100 opacity-80"
        />
        <img
          src="./Ellipse 29.png"
          alt=""
          className="absolute left-1 xs:left-2 sm:left-4 top-[-6%] xs:top-[-8%] sm:top-[-10%] lg:top-[-12%] w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40 xl:w-200 opacity-80"
        />
        <WhyChooseSection />
      </div>

      {/* Testimonial */}
      <Testimonial />

      <FooterSection />
    </>
  )
}
