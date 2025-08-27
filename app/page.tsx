import CardSlider from "../components/CardSlider"
import FooterSection from "../components/FooterSection"
import Header from "../components/Header"
import Testimonial from "../components/Testimonial"
import WhyChooseSection from "../components/WhyChooseSection"

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <img src="./Ellipse 13.png" alt="" className="absolute top-[35%] left-0 w-16 sm:w-20 lg:w-auto opacity-80" />
        <img src="./Ellipse 15.png" alt="" className="absolute top-[28%] right-0 w-16 sm:w-20 lg:w-auto opacity-80" />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="absolute top-[28%] left-[10%] w-12 sm:w-16 lg:w-auto opacity-60"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="w-12 sm:w-16 lg:w-[100px] absolute top-[28%] right-[10%] opacity-60"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="w-8 sm:w-12 lg:w-[50px] absolute top-[38%] right-[30%] opacity-60"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="absolute top-[18%] left-[30%] w-10 sm:w-14 lg:w-auto opacity-60"
        />
        <img src="./Ellipse 14.png" alt="" className="w-20 sm:w-24 lg:w-30 absolute top-[20%] left-[16%] opacity-70" />
        <img src="./Group 63.png" alt="" className="absolute top-[25%] left-[16%] w-16 sm:w-20 lg:w-auto opacity-70" />
        <img
          src="./Group 63.png"
          alt=""
          className="w-16 sm:w-20 lg:w-[100px] absolute top-[14%] right-[18%] opacity-70"
        />

        <section className="bg-[#BFE2F8] rounded-b-[80px] sm:rounded-b-[120px] lg:rounded-b-[180px] pb-12 sm:pb-16 lg:pb-24">
          <div className="bg-[linear-gradient(179.87deg,#2FA8CC_-19.91%,#032D89_73.02%)] rounded-b-[100px] sm:rounded-b-[150px] lg:rounded-b-[200px] overflow-hidden">
            <Header />

            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              {/* Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[97px] leading-[120%] sm:leading-[140%] lg:leading-[150%] font-semibold text-white mb-2 sm:mb-4">
                HD FUTURE. TECH
              </h1>
              {/* Subtitle */}
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/80 font-normal mb-4 sm:mb-6 lg:mb-[-25px]">
                Nơi Định Nghĩa Lại Công Nghệ Của Bạn
              </p>

              <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 md:w-20 lg:w-[75px]">
                  <img src="./logo_header.png" alt="" className="object-cover w-full" />
                </div>
                <div className="w-24 sm:w-32 md:w-40 lg:w-48">
                  <img src="./banner_logo_code.png" alt="" className="w-full object-cover" />
                </div>
                <div className="w-20 sm:w-24 md:w-32 lg:w-36 mt-[-8px] sm:mt-[-12px] lg:mt-[-15px]">
                  <img src="./banner_logo_otp_.png" alt="" className="w-full object-cover" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-3 sm:mt-5 text-sm sm:text-lg md:text-xl lg:text-[26px] w-full sm:w-auto">
                <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full bg-white text-blue-600 font-semibold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-105 active:scale-95 transition">
                  Contact Us
                </button>
                <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full bg-[#203E80] text-white font-semibold shadow-[inset_0px_6px_7.2px_0px_rgba(108,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-110 active:scale-95 transition">
                  Chat With Us
                </button>
              </div>

              <div className="relative w-full h-16 sm:h-24 lg:h-32"></div>
            </div>

            <div className="relative h-[400px] sm:h-[600px] lg:h-[800px] w-full overflow-hidden">
              <div className="absolute top-0 left-[-200px] sm:left-[-300px] lg:left-[-400px] right-[-180px] sm:right-[-270px] lg:right-[-360px] bottom-0">
                <img src="./Ellipse 12.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute top-[15%] left-[29%] right-0">
                  <img src="./connect-network.png" alt="" className="w-full max-w-none" />
                </div>
                <img src="./Group 95.png" alt="" className="absolute top-[22%] left-[41%] w-3 sm:w-4 lg:w-auto" />
                <img src="./Group 95.png" alt="" className="absolute top-[40%] right-[36%] w-3 sm:w-4 lg:w-auto" />
                <img src="./Group 95.png" alt="" className="absolute top-[50%] left-[50%] w-3 sm:w-4 lg:w-auto" />
                <img src="./Group 95.png" alt="" className="absolute top-[31%] right-[45%] w-3 sm:w-4 lg:w-auto" />
                <img src="./Group 95.png" alt="" className="absolute top-[65%] left-[42%] w-3 sm:w-4 lg:w-auto" />
                <img src="./Group 95.png" alt="" className="absolute top-[20%] right-[38%] w-3 sm:w-4 lg:w-auto" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full py-4 sm:py-6 lg:py-8">
        <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 px-4">
          <div className="w-20 sm:w-24 md:w-32 lg:w-[146px]">
            <img src="./banner_ls_logo_future.png" alt="" className="object-cover w-full" />
          </div>
          <div className="w-28 sm:w-36 md:w-44 lg:w-56">
            <img src="./banner_ls_logo_code.png" alt="" className="w-full object-cover" />
          </div>
          <div className="w-32 sm:w-40 md:w-48 lg:w-60 mt-[-8px] sm:mt-[-12px] lg:mt-[-15px]">
            <img src="./banner_ls_logo_otp.png" alt="" className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#BFE2F8_0%,#FFFFFF_100%)] bg-gradient-to-b from-[#BFE2F8] to-[#FFFFFF] rounded-[80px] sm:rounded-[150px] lg:rounded-[246px] overflow-hidden z-[9999] py-10 sm:py-16 lg:py-20">
        <div className="w-[95%] m-auto relative bg-white rounded-[60px] sm:rounded-[90px] lg:rounded-[125px] mx-4 sm:mx-8 lg:mx-14 overflow-hidden">
          <div className="absolute inset-0 left-[20%] sm:left-[30%] lg:left-[35%] top-[-5%] sm:top-[-8%] lg:top-[-10%] bottom-[-8%] sm:bottom-[-12%] lg:bottom-[-15%] opacity-90">
            <img src="./Mesa de trabajo 1 3.png" alt="Illustration" className="w-full h-full object-cover" />
          </div>

          <div className="w-full lg:w-3/5 px-4 sm:px-8 lg:pl-32 py-8 sm:py-12 lg:py-16">
            <div className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[450px] ml-0 sm:ml-[-30px] lg:ml-[-60px]">
              <img src="./HD_logo_final.png" alt="HD FutureTech Logo" className="w-full object-cover" />
            </div>
            <div className="w-full lg:w-2/3 mt-[-20px] sm:mt-[-35px] lg:mt-[-50px] mb-6 sm:mb-8 lg:mb-10">
              <p className="text-[#151D50] font-medium text-sm sm:text-lg md:text-xl lg:text-[20px] xl:text-[28px] leading-[1.4] sm:leading-[1.5] lg:leading-[37px] mb-6 sm:mb-8 lg:mb-10">
                Our experienced project management team ensures that your projects are delivered on time, within budget,
                and according to your specifications.
              </p>
              <button className="mt-4 sm:mt-6 lg:mt-8 px-8 sm:px-12 lg:px-16 py-2 sm:py-3 rounded-full bg-[#122377] text-white text-sm sm:text-lg md:text-xl lg:text-[18px] xl:text-[37px] font-medium hover:brightness-110 active:scale-95 transition mb-8 sm:mb-12 lg:mb-14">
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 sm:mt-20 lg:mt-30 mb-6 sm:mb-8 lg:mb-10 px-4">
          <h2 className="font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[97px] leading-[104%] tracking-[0] text-[#243761]">
            Take a look at
          </h2>
          <h2 className="mt-1 font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[97px] leading-[104%] tracking-[0] text-[#093FB4]">
            Our Workflow About Us
          </h2>
        </div>

        <div className="my-6 sm:my-8 lg:my-10 container mx-auto px-4">
          <div className="relative min-h-[600px] sm:min-h-[800px] lg:min-h-[1000px]">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <img src="./Group 106.png" alt="" className="object-cover w-[100px] sm:w-[150px] lg:w-[200px] m-auto" />
            </div>

            <div className="block lg:hidden space-y-6">
              {/* Mobile timeline cards */}
              <div className="flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82]">
                <span className="text-[#243761] font-bold text-xl sm:text-2xl">2025</span>
                <p className="font-normal text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82]">
                <span className="text-[#243761] font-bold text-xl sm:text-2xl">2024</span>
                <p className="font-normal text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82]">
                <span className="text-[#243761] font-bold text-xl sm:text-2xl">2023</span>
                <p className="font-normal text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="flex items-center gap-4 border border-[#2427BD] rounded-2xl px-4 py-3 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] opacity-65">
                <span className="text-[#243761] font-bold text-xl sm:text-2xl">2022</span>
                <p className="font-normal text-sm sm:text-base leading-[1.4] text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
            </div>

            {/* Desktop timeline layout */}
            <div className="hidden lg:block">
              <div className="absolute top-[-22px] right-35 w-[400px] xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:left-[-35px] after:text-4xl after:text-blue-900 after:border-l-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">2025</span>
                <p className="font-normal text-lg xl:text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="absolute bottom-[36.5%] right-52 w-[400px] xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:left-[-35px] after:text-4xl after:text-blue-900 after:border-l-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">2023</span>
                <p className="font-normal text-lg xl:text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="absolute top-[30%] left-52 w-[400px] xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:right-[-35px] after:text-4xl after:text-blue-900 after:border-r-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">2024</span>
                <p className="font-normal text-lg xl:text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
              <div className="absolute bottom-[1%] opacity-65 left-52 w-[400px] xl:w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:right-[-35px] after:text-4xl after:text-blue-900 after:border-r-[35px] after:border-t-4">
                <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">2022</span>
                <p className="font-normal text-lg xl:text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                  We follow industry-standard methodologies and employ effective communication
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-b-[80px] sm:rounded-b-[150px] lg:rounded-b-[246px] pb-3">
          <CardSlider />
        </div>
      </section>

      <div className="relative pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <img src="./Ellipse 28.png" alt="" className="absolute right-0 bottom-0 w-20 sm:w-24 lg:w-100 opacity-80" />
        <img
          src="./Ellipse 29.png"
          alt=""
          className="absolute left-2 sm:left-4 top-[-8%] sm:top-[-10%] lg:top-[-12%] w-32 sm:w-40 lg:w-200 opacity-80"
        />
        <WhyChooseSection />
      </div>

      {/* Testimonial */}
      <Testimonial />

      <FooterSection />
    </>
  )
}
