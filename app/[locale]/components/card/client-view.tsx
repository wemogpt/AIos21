"use client"

import { useState } from "react"
import { AppCard } from "@/components/layout/app-card"
import { ChartCard } from "@/components/data-display/chart-card"
import { SimpleLineChart } from "@/components/data-display/simple-line-chart"
import { Tabs } from "@/components/navigation/tabs"
import { TagCard } from "@/components/card/tag-card"

// Import new image cards
import { FullBleedImageCard } from "@/components/card/image-cards/full-bleed-image-card"
import { BorderedImageCard } from "@/components/card/image-cards/bordered-image-card"
import { OverlayTitleImageCard } from "@/components/card/image-cards/overlay-title-image-card"
import { TitleBelowImageCard } from "@/components/card/image-cards/title-below-image-card"
import { ButtonImageCard } from "@/components/card/image-cards/button-image-card"
import { ImageLeftContentRightCard } from "@/components/card/image-cards/image-left-content-right-card"

// Import business cards
import { AITrainerJobCard } from "@/components/card/business-cards/ai-trainer-job-card"
import { CityRankingCard } from "@/components/card/business-cards/city-ranking-card"
import { SalaryComparisonCard } from "@/components/card/business-cards/salary-comparison-card"
import { CompanyRankingCard } from "@/components/card/business-cards/company-ranking-card"
import { SkillsMasteryCard } from "@/components/card/business-cards/skills-mastery-card"
import { SpecialBenefitsCard } from "@/components/card/business-cards/special-benefits-card"
import { AIProductManagerCard } from "@/components/card/business-cards/ai-product-manager-card"
import { EducationBackgroundCard } from "@/components/card/business-cards/education-background-card"
import { ProjectExperienceCard } from "@/components/card/business-cards/project-experience-card"
import { KpiMetricCard } from "@/components/card/business-cards/kpi-metric-card"
import { ProductDisplayCard } from "@/components/card/business-cards/product-display-card"
import { TeamMemberCard } from "@/components/card/business-cards/team-member-card"
import { OrderStatusCard } from "@/components/card/business-cards/order-status-card"
import { Users, TrendingUp, Twitter, Linkedin, Github } from 'lucide-react'

// Import education cards
import { CourseOverviewCard } from "@/components/card/education-cards/course-overview-card"
import { LessonProgressCard } from "@/components/card/education-cards/lesson-progress-card"
import { InstructorProfileCard } from "@/components/card/education-cards/instructor-profile-card"
import { CertificateCard } from "@/components/card/education-cards/certificate-card"
import { UpcomingLiveSessionCard } from "@/components/card/education-cards/upcoming-live-session-card"
import { AIEducationPlanCard } from "./ai-education-plan-card"
import { BrainCircuit } from 'lucide-react'

// Import the new CourseOutline component
import { CourseOutline } from "@/components/card/education-cards/course-outline"

// Import the new e-commerce card components
import { ProductGridCard } from "@/components/card/ecommerce-cards/product-grid-card"
import { ProductListCard } from "@/components/card/ecommerce-cards/product-list-card"
import { CartItemCard } from "@/components/card/ecommerce-cards/cart-item-card"
import { OrderSummaryCard } from "@/components/card/ecommerce-cards/order-summary-card"
import { PromotionCard } from "@/components/card/ecommerce-cards/promotion-card"
import { CategoryCard } from "@/components/card/ecommerce-cards/category-card"
import { ReviewCard } from "@/components/card/ecommerce-cards/review-card"
import { ShippingOptionCard } from "@/components/card/ecommerce-cards/shipping-option-card"

// Import the new composite card
import { AILearningCard } from "@/components/card/composite-cards/ai-learning-card"

interface CardComponentsClientViewProps {
dict: {
  title: string
  appCard: string
  appCardDescription: string
  chartCard: string
  chartCardDescription: string
  cardTabs: string[]
  // New composite card dictionary
  compositeCardAILearning: string
  compositeCardAILearningDescription: string
  ecommerceCardComingSoon: string
  imageCardFullBleed: string
  imageCardFullBleedDescription: string
  imageCardWithBorder: string
  imageCardWithBorderDescription: string
  imageCardWithOverlayTitle: string
  imageCardWithOverlayTitleDescription: string
  overlayTitle: string
  imageCardWithTitleBelow: string
  imageCardWithTitleBelowDescription: string
  cardTitle: string
  cardSubtitle: string
  imageCardWithButton: string
  imageCardWithButtonDescription: string
  cardButtonText: string
  imageCardLeftContentRight: string
  imageCardLeftContentRightDescription: string
  leftContentRightTitle: string
  leftContentRightSubtitle: string
  tagCard: string
  tagCardDescription: string
  tagCardTitle: string
  tags: string[]
  // Education Card Dictionary
  educationCardCourseOverview: string
  educationCardCourseOverviewDescription: string
  courseOverviewTitle: string
  courseOverviewInstructor: string
  courseOverviewButton: string
  educationCardLessonProgress: string
  educationCardLessonProgressDescription: string
  lessonProgressTitle: string
  lessonProgressLesson: string
  lessonProgressButton: string
  educationCardInstructorProfile: string
  educationCardInstructorProfileDescription: string
  instructorProfileName: string
  instructorProfileBio: string
  instructorProfileButton: string
  educationCardCertificate: string
  educationCardCertificateDescription: string
  certificateCourseName: string
  certificateUserName: string
  certificateButton: string
  educationCardUpcomingLive: string
  educationCardUpcomingLiveDescription: string
  upcomingLiveTitle: string
  upcomingLiveInstructor: string
  upcomingLiveButton: string
  // New Course Outline Dictionary
  courseOutline: string
  courseOutlineDescription: string
  courseOutlineTitle: string
  courseOutlineSection: {
    title: string
    type: string
    totalHours: string
    modules: {
      title: string
      lessons: {
        id: number
        title: string
        duration: string
      }[]
    }[]
  }
  // E-commerce Dictionary
  ecommerceProductGrid: string
  ecommerceProductGridDescription: string
  ecommerceProductList: string
  ecommerceProductListDescription: string
  ecommerceCartItem: string
  ecommerceCartItemDescription: string
  ecommerceOrderSummary: string
  ecommerceOrderSummaryDescription: string
  ecommercePromotion: string
  ecommercePromotionDescription: string
  productName: string
  productDescription: string
  productPrice: string
  productAttributes: string
  addToCart: string
  orderSummaryTitle: string
  subtotal: string
  shipping: string
  tax: string
  total: string
  checkout: string
  promoTitle: string
  promoSubtitle: string
  promoButton: string
  ecommerceCategory: string
  ecommerceCategoryDescription: string
  ecommerceReview: string
  ecommerceReviewDescription: string
  ecommerceShipping: string
  ecommerceShippingDescription: string
  categoryElectronics: string
  categoryFashion: string
  reviewUserName: string
  reviewVerified: string
  reviewContent: string
  shippingStandard: string
  shippingStandardEta: string
  shippingExpress: string
  shippingExpressEta: string
}
}

export function CardComponentsClientView({ dict }: CardComponentsClientViewProps) {
const [activeTab, setActiveTab] = useState(dict.cardTabs[0])
const [selectedShipping, setSelectedShipping] = useState('standard')

const kpiChartData = [
  { value: 10 }, { value: 50 }, { value: 30 }, { value: 80 }, { value: 60 }, { value: 100 },
]

return (
  <main className="px-4">
    <div className="w-full mb-8">
      <Tabs tabs={dict.cardTabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>

    {activeTab === dict.cardTabs[0] && (
      <div className="space-y-12 animate-in fade-in duration-500">
        {/* Existing Cards */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.appCard}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.appCardDescription}</p>
          <AppCard className="p-8">
            <h4 className="font-bold" style={{ color: "var(--card-title-color)" }}>
              App Card Title
            </h4>
            <p className="mt-2" style={{ color: "var(--card-text-color)" }}>
              This is an example of a standard AppCard. It's great for displaying mixed content.
            </p>
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.chartCard}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.chartCardDescription}</p>
          <div className="h-80">
            <ChartCard>
              <SimpleLineChart title="Data inside a ChartCard" />
            </ChartCard>
          </div>
        </section>

        {/* New Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.imageCardFullBleed}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.imageCardFullBleedDescription}</p>
            <FullBleedImageCard />
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.imageCardWithBorder}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.imageCardWithBorderDescription}</p>
            <BorderedImageCard />
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.imageCardWithOverlayTitle}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.imageCardWithOverlayTitleDescription}</p>
            <OverlayTitleImageCard title={dict.overlayTitle} />
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.imageCardWithTitleBelow}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.imageCardWithTitleBelowDescription}</p>
            <TitleBelowImageCard title={dict.cardTitle} subtitle={dict.cardSubtitle} />
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.imageCardWithButton}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.imageCardWithButtonDescription}</p>
            <ButtonImageCard title={dict.cardTitle} subtitle={dict.cardSubtitle} buttonText={dict.cardButtonText} />
          </section>
          <section className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.tagCard}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.tagCardDescription}</p>
            <TagCard title={dict.tagCardTitle} tags={dict.tags} />
          </section>
        </div>
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.imageCardLeftContentRight}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.imageCardLeftContentRightDescription}</p>
          <ImageLeftContentRightCard title={dict.leftContentRightTitle} subtitle={dict.leftContentRightSubtitle} />
        </section>
      </div>
    )}

    {activeTab === dict.cardTabs[1] && (
      <div className="space-y-12 animate-in fade-in duration-500">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.compositeCardAILearning}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.compositeCardAILearningDescription}</p>
          <AILearningCard />
        </section>
      </div>
    )}

    {activeTab === dict.cardTabs[2] && (
      <div className="animate-in fade-in duration-500">
        <AppCard className="flex justify-center items-center p-16">
          <p className="text-gray-500">Functional Cards Coming Soon...</p>
        </AppCard>
      </div>
    )}

    {activeTab === dict.cardTabs[3] && (
      <div className="space-y-12 animate-in fade-in duration-500">
        {/* New Business Cards */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">KPI 指标卡</h3>
          <p className="text-sm text-gray-600 mb-4">用于在仪表盘中快速展示关键绩效指标及其趋势。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <KpiMetricCard 
              title="日活跃用户"
              value="18,390"
              change={5.2}
              changePeriod="较昨日"
              icon={<Users className="w-5 h-5" />}
              chartData={kpiChartData}
            />
            <KpiMetricCard 
              title="月收入"
              value="¥128,430"
              change={-1.8}
              changePeriod="较上月"
              icon={<TrendingUp className="w-5 h-5" />}
              chartData={kpiChartData.slice().reverse()}
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">产品展示卡</h3>
          <p className="text-sm text-gray-600 mb-4">用于电子商务网站或产品列表，展示待售商品。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProductDisplayCard
              imageUrl="/product-headphone.png"
              name="智能降噪耳机"
              price="¥899"
              rating={4.5}
              tags={["新品", "热销"]}
              buttonText="加入购物车"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">团队成员卡</h3>
          <p className="text-sm text-gray-600 mb-4">用于"关于我们"页面或项目管理工具中介绍团队成员。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard
              avatarUrl="/team-member-1.png"
              name="林静"
              role="首席设计师"
              isOnline={true}
              bio="专注于创造直观且引人入胜的用户体验，拥有超过8年的设计经验。"
              socials={[
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
              ]}
            />
            <TeamMemberCard
              avatarUrl="/team-member-2.png"
              name="陈伟"
              role="高级工程师"
              isOnline={false}
              bio="热衷于构建可扩展、高性能的后端系统，精通多种编程语言。"
              socials={[
                { icon: <Github className="w-4 h-4" />, href: "#" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
              ]}
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">订单状态卡</h3>
          <p className="text-sm text-gray-600 mb-4">在用户中心显示最近订单的状态和进度。</p>
          <OrderStatusCard
            orderId="2025080612345"
            orderDate="2025-08-06"
            status="运输中"
            currentStep={3}
            steps={["已下单", "已打包", "已发货", "已送达"]}
            productImages={["/order-item-1.png", "/order-item-2.png"]}
            totalPrice="¥1,298.00"
          />
        </section>

        {/* Existing Business Cards */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">AI训练师职位卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示职位信息、薪资数据和经验要求分布的业务卡片</p>
          <AITrainerJobCard />
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">工作城市排名卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示不同城市的职位数量、平均薪资和竞争力指标</p>
          <CityRankingCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">薪资对比分析卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示不同学历背景下AI训练师的薪资区间对比</p>
          <SalaryComparisonCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">企业招聘排行卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示新职业招聘企业的排名和在招职位数量</p>
          <CompanyRankingCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">核心技能掌握卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示个人或团队在不同技能领域的掌握程度</p>
          <SkillsMasteryCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">特色待遇卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示职位提供的各种福利待遇和特色服务</p>
          <SpecialBenefitsCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">AI产品经理职位卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示职位的基本信息包括薪资、地点、学历和经验要求</p>
          <AIProductManagerCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">学历及专业背景卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示职位的学历要求和相关专业背景信息</p>
          <EducationBackgroundCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">项目经验卡片</h3>
          <p className="text-sm text-gray-600 mb-4">展示个人或团队的项目经验，包括进度、角色和技术栈</p>
          <ProjectExperienceCard />
        </section>
      </div>
    )}

    {activeTab === dict.cardTabs[4] && (
      <div className="space-y-12 animate-in fade-in duration-500">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">AI教育计划推荐卡片</h3>
          <p className="text-sm text-gray-600 mb-4">智能化的学习计划推荐，提供个性化的AI对话式学习指导和分步骤规划</p>
          <AIEducationPlanCard />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.educationCardCourseOverview}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.educationCardCourseOverviewDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CourseOverviewCard
              imageUrl="/course-thumbnail-1.png"
              title={dict.courseOverviewTitle}
              instructorName={dict.courseOverviewInstructor}
              instructorAvatarUrl="/team-member-1.png"
              lessonCount={24}
              price="¥299"
              buttonText={dict.courseOverviewButton}
            />
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.educationCardLessonProgress}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.educationCardLessonProgressDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LessonProgressCard
              icon={<BrainCircuit className="w-6 h-6" />}
              courseTitle={dict.lessonProgressTitle}
              currentLesson={dict.lessonProgressLesson}
              progress={65}
              buttonText={dict.lessonProgressButton}
            />
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.educationCardInstructorProfile}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.educationCardInstructorProfileDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InstructorProfileCard
              avatarUrl="/instructor-avatar.png"
              name={dict.instructorProfileName}
              bio={dict.instructorProfileBio}
              courseCount={12}
              studentCount={8500}
              buttonText={dict.instructorProfileButton}
            />
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.educationCardCertificate}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.educationCardCertificateDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertificateCard
              courseName={dict.certificateCourseName}
              userName={dict.certificateUserName}
              completionDate="2025-07-15"
              certificateId="IP-202507-1A2B3C"
              buttonText={dict.certificateButton}
            />
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.educationCardUpcomingLive}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.educationCardUpcomingLiveDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UpcomingLiveSessionCard
              title={dict.upcomingLiveTitle}
              instructorName={dict.upcomingLiveInstructor}
              startTime={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000)}
              buttonText={dict.upcomingLiveButton}
            />
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.courseOutline}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.courseOutlineDescription}</p>
          <CourseOutline
            title={dict.courseOutlineTitle}
            section={dict.courseOutlineSection}
          />
        </section>
      </div>
    )}

    {activeTab === dict.cardTabs[5] && (
      <div className="space-y-12 animate-in fade-in duration-500">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommercePromotion}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.ecommercePromotionDescription}</p>
          <PromotionCard
            title={dict.promoTitle}
            subtitle={dict.promoSubtitle}
            buttonText={dict.promoButton}
            imageUrl="/product-drone.png"
            endDate={new Date(new Date().getTime() + 2 * 60 * 60 * 1000)}
          />
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommerceCategory}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.ecommerceCategoryDescription}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard imageUrl="/category-electronics.png" name={dict.categoryElectronics} />
            <CategoryCard imageUrl="/category-fashion.png" name={dict.categoryFashion} />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommerceProductGrid}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.ecommerceProductGridDescription}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductGridCard
              imageUrl="/product-watch.png"
              name={dict.productName}
              price={dict.productPrice}
              rating={4.8}
            />
            <ProductGridCard
              imageUrl="/product-vr-headset.png"
              name="VR Headset"
              price="¥2,999"
              rating={4.9}
            />
            <ProductGridCard
              imageUrl="/product-smart-speaker.png"
              name="Smart Speaker"
              price="¥499"
              rating={4.7}
            />
             <ProductGridCard
              imageUrl="/product-drone.png"
              name="Autonomous Drone"
              price="¥4,599"
              rating={4.9}
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommerceProductList}</h3>
          <p className="text-sm text-gray-600 mb-4">{dict.ecommerceProductListDescription}</p>
          <ProductListCard
            imageUrl="/product-drone.png"
            name="Autonomous Drone"
            description="A high-performance drone with AI-powered flight control and 4K camera."
            price="¥4,599"
            buttonText={dict.addToCart}
          />
        </section>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommerceCartItem}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.ecommerceCartItemDescription}</p>
            <div className="space-y-4">
              <CartItemCard
                imageUrl="/product-watch.png"
                name={dict.productName}
                attributes={dict.productAttributes}
                price={dict.productPrice}
              />
              <CartItemCard
                imageUrl="/product-smart-speaker.png"
                name="Smart Speaker"
                attributes="Color: Space Gray"
                price="¥499"
              />
            </div>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommerceOrderSummary}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.ecommerceOrderSummaryDescription}</p>
            <OrderSummaryCard
              title={dict.orderSummaryTitle}
              subtotal={2498}
              shipping={0}
              tax={150.35}
              totalLabel={dict.total}
              buttonText={dict.checkout}
            />
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommerceReview}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.ecommerceReviewDescription}</p>
            <ReviewCard
              avatarUrl="/user-review-avatar.png"
              userName={dict.reviewUserName}
              isVerified={true}
              rating={5}
              content={dict.reviewContent}
              date="2025-08-05"
            />
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.ecommerceShipping}</h3>
            <p className="text-sm text-gray-600 mb-4">{dict.ecommerceShippingDescription}</p>
            <div className="space-y-3">
              <ShippingOptionCard
                name={dict.shippingStandard}
                eta={dict.shippingStandardEta}
                price="Free"
                selected={selectedShipping === 'standard'}
                onSelect={() => setSelectedShipping('standard')}
              />
              <ShippingOptionCard
                name={dict.shippingExpress}
                eta={dict.shippingExpressEta}
                price="¥25.00"
                selected={selectedShipping === 'express'}
                onSelect={() => setSelectedShipping('express')}
              />
            </div>
          </section>
        </div>
      </div>
    )}

    {activeTab === dict.cardTabs[6] && (
      <div className="animate-in fade-in duration-500">
        <AppCard className="flex justify-center items-center p-16">
          <p className="text-gray-500">Content Cards Coming Soon...</p>
        </AppCard>
      </div>
    )}
  </main>
)
}
