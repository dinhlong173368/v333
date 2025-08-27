import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, Globe, Shield, Zap, Users, BarChart3, Headphones } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm lg:text-base">HD</span>
              </div>
              <span className="text-lg lg:text-xl font-bold text-gray-900">HD FUTURE TECH</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Trang chủ
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Giới thiệu
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Dịch vụ
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Liên hệ
              </a>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-2 text-sm lg:text-base">
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-tech-network.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 text-balance">HD FUTURE TECH</h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-blue-100 text-pretty">
                Giải pháp công nghệ tiên tiến cho doanh nghiệp hiện đại
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg"
              >
                Khám phá ngay
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
                <Globe className="w-full h-full text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-blue-600 mb-4 lg:mb-6">HD</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 text-balance">
                HD FUTURE TECH
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 text-pretty">
                Chúng tôi là đơn vị tiên phong trong việc cung cấp các giải pháp công nghệ tiên tiến, giúp doanh nghiệp
                chuyển đổi số và phát triển bền vững trong thời đại công nghệ 4.0.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 lg:px-8 lg:py-4">
                Tìm hiểu thêm
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Hành trình phát triển của chúng tôi
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-pretty">
              Từ những bước đầu tiên đến thành công hôm nay
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform sm:-translate-x-0.5"></div>

            <div className="space-y-8 lg:space-y-12">
              {[
                { year: "2023", title: "Thành lập công ty", desc: "Khởi đầu với tầm nhìn công nghệ tiên tiến" },
                { year: "2024", title: "Mở rộng dịch vụ", desc: "Phát triển đa dạng giải pháp cho doanh nghiệp" },
                { year: "2025", title: "Đối tác chiến lược", desc: "Hợp tác với các tập đoàn lớn trong nước" },
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform sm:-translate-x-2 z-10"></div>
                  <div
                    className={`ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:ml-auto"} sm:w-1/2`}
                  >
                    <Card className="p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-0">
                        <div className="text-lg lg:text-xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm lg:text-base text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun OTP Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 text-balance">
                Fun OTP
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 text-pretty">
                Hệ thống xác thực OTP thông minh và bảo mật cao, mang lại trải nghiệm người dùng tuyệt vời với giao diện
                thân thiện và dễ sử dụng.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 lg:px-8 lg:py-4">
                Trải nghiệm ngay
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-50 animate-pulse animation-delay-1000"></div>
                <div className="absolute inset-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-70 animate-pulse animation-delay-2000"></div>
                <Shield className="absolute inset-0 m-auto w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-pretty">
              Giải pháp toàn diện cho mọi nhu cầu công nghệ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Globe, title: "Phát triển Web", desc: "Xây dựng website chuyên nghiệp, tối ưu SEO" },
              { icon: Shield, title: "Bảo mật hệ thống", desc: "Giải pháp bảo mật toàn diện cho doanh nghiệp" },
              { icon: Zap, title: "Tự động hóa", desc: "Tối ưu quy trình làm việc với AI và automation" },
              { icon: Users, title: "Quản lý nhân sự", desc: "Hệ thống quản lý nhân sự thông minh" },
              { icon: BarChart3, title: "Phân tích dữ liệu", desc: "Báo cáo và phân tích dữ liệu chi tiết" },
              { icon: Headphones, title: "Hỗ trợ 24/7", desc: "Đội ngũ hỗ trợ chuyên nghiệp 24/7" },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">{service.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 text-pretty">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-pretty">Những phản hồi tích cực từ khách hàng</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Nguyễn Văn A",
                company: "CEO, ABC Corp",
                rating: 5,
                text: "Dịch vụ tuyệt vời, đội ngũ chuyên nghiệp và hỗ trợ nhiệt tình.",
              },
              {
                name: "Trần Thị B",
                company: "CTO, XYZ Ltd",
                rating: 5,
                text: "Giải pháp công nghệ hiện đại, giúp công ty chúng tôi tăng hiệu quả làm việc.",
              },
              {
                name: "Lê Văn C",
                company: "Manager, DEF Inc",
                rating: 5,
                text: "Hỗ trợ 24/7 rất tốt, luôn giải quyết vấn đề nhanh chóng.",
              },
              {
                name: "Phạm Thị D",
                company: "Director, GHI Co",
                rating: 5,
                text: "Đội ngũ kỹ thuật giỏi, sản phẩm chất lượng cao.",
              },
              {
                name: "Hoàng Văn E",
                company: "CEO, JKL Group",
                rating: 5,
                text: "Giá cả hợp lý, dịch vụ chuyên nghiệp và đáng tin cậy.",
              },
              {
                name: "Vũ Thị F",
                company: "CTO, MNO Tech",
                rating: 5,
                text: "Rất hài lòng với sự hỗ trợ và chất lượng dịch vụ.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 text-pretty">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</div>
                    <div className="text-xs lg:text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
              <Globe className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-balance">
              Sẵn sàng chuyển đổi doanh nghiệp của bạn?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 lg:mb-10 text-pretty">
              Hãy để chúng tôi giúp bạn xây dựng giải pháp công nghệ phù hợp nhất
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 lg:px-10 lg:py-5 text-base lg:text-lg"
            >
              Liên hệ tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 text-balance">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 text-pretty">
                Gửi yêu cầu tư vấn và chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
              </p>
              <div className="flex justify-center lg:justify-start">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                  <Headphones className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-blue-600" />
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <form className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                    <Input placeholder="Nhập họ và tên của bạn" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="Nhập email của bạn" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                    <Input placeholder="Nhập số điện thoại" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tin nhắn</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={4}
                      placeholder="Mô tả yêu cầu của bạn..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 lg:py-4">Gửi yêu cầu</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm lg:text-base">HD</span>
                </div>
                <span className="text-lg lg:text-xl font-bold">HD FUTURE TECH</span>
              </div>
              <p className="text-sm lg:text-base text-gray-400 text-pretty">
                Đơn vị tiên phong trong lĩnh vực công nghệ, mang đến giải pháp tối ưu cho doanh nghiệp.
              </p>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Dịch vụ</h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Phát triển Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bảo mật hệ thống
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tự động hóa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Phân tích dữ liệu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Công ty</h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Liên hệ</h3>
              <div className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-400">
                <p>Email: info@hdfuturetech.com</p>
                <p>Phone: +84 123 456 789</p>
                <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-sm lg:text-base text-gray-400">© 2024 HD FUTURE TECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
