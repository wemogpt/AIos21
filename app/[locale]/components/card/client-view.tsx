"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTypewriter } from "@/components/hooks/use-typewriter"
import { CardThemePicker, useCardTheme } from "@/components/providers/card-theme-provider"
import { LocalCardThemeEditor } from "@/components/theme/local-card-theme-editor"
import { DataChartThemeProvider, useDataChartTheme } from "@/components/providers/data-chart-theme-provider"
import { ChartThemePicker } from "@/components/theme/chart-theme-picker"
import {
  // Content
  FullBleedImageCard,
  OverlayTitleImageCard,
  TitleBelowImageCard,
  ButtonImageCard,
  BorderedImageCard,
  ImageLeftContentRightCard,
  TagCard,
  // Education
  CourseOverviewCard,
  LessonProgressCard,
  InstructorProfileCard,
  CertificateCard,
  UpcomingLiveSessionCard,
  CourseListSimple,
  CourseListDetailed,
  CourseOutline,
  // E-commerce
  ProductGridCard,
  ProductListCard,
  CartItemCard,
  OrderSummaryCard,
  PromotionCard,
  CategoryCard,
  ReviewCard,
  ShippingOptionCard,
  // Functional
  AiLearningCard,
} from "packages/card-sdk/src/index"
import { CourseDisplay, BaseCard } from "@ipollo/card-sdk" // Updated import
import { BrainCircuit } from "lucide-react"
import type { Locale } from "@ipollo/core-config"

interface ClientViewProps {
  dict: any
}

// Mock data and explanations, now living in the client view
const defaultCourseSections = [
  {
    title: "基础课程",
    type: "online",
    lessons: [
      { id: 1, title: "AI基础概念介绍", duration: "40分钟", type: "online" },
      { id: 2, title: "AI发展历程回顾", duration: "45分钟", type: "online" },
    ],
  },
  {
    title: "应用课程",
    type: "offline",
    lessons: [
      { id: 5, title: "提示词设计与优化", duration: "90分钟", type: "offline" },
      { id: 6, title: "场景应用实践", duration: "120分钟", type: "offline" },
    ],
  },
]

const defaultBooks = [
  {
    title: "《人工智能：一种现代方法》",
    author: "Stuart Russell & Peter Norvig 著",
    tags: [{ text: "经典教材" }],
    readingTime: "约30小时阅读",
  },
  { title: "《机器学习》", author: "周志华 著", tags: [{ text: "中文经典" }], readingTime: "约25小时阅读" },
]

const defaultPapers = [
  {
    title: "Attention Is All You Need",
    description: "Transformer架构奠基论文",
    badge: (
      <span className="text-xs bg-red-50 border border-red-200 text-red-700 rounded-md px-1.5 py-0.5">里程碑</span>
    ),
    year: "2017年发表",
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    description: "ResNet网络结构论文",
    badge: (
      <span className="text-xs bg-orange-50 border border-orange-200 text-orange-700 rounded-md px-1.5 py-0.5">
        计算机视觉
      </span>
    ),
    year: "2015年发表",
  },
]

const defaultIndividualCourses = [
  {
    title: "CS229: Machine Learning",
    provider: "Stanford University - Andrew Ng",
    badge: (
      <span className="text-xs bg-blue-50 border border-blue-200 text-blue-700 rounded-md px-1.5 py-0.5">斯坦福</span>
    ),
    duration: "20讲 约40小时",
  },
  {
    title: "Deep Learning Specialization",
    provider: "Coursera - deeplearning.ai",
    badge: (
      <span className="text-xs bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-md px-1.5 py-0.5">
        专项课程
      </span>
    ),
    duration: "5门课程 约60小时",
  },
]

const stepExplanations = {
  step1:
    "第一步很关键！我们先从AI基础概念开始，让你建立扎实的理论基础。这个阶段包括线上理论学习和线下实践操作，确保你能够理解AI的核心原理。",
  step2:
    "现在进入进阶阶段！在掌握基础知识后，我们开始学习更高级的AI应用技术，接触行业最前沿的技术和实践案例，提升你的专业技能水平。",
  step3: "最后冲刺阶段！完成前两个阶段的学习后，我们将帮助你获得专业认证，并提供就业指导，确保你能够成功进入AI行业。",
}

const recommendationReason =
  "我仔细分析了你的需求，考虑了你的背景、时间和目标。这个学习方案结合了理论基础和实践应用，让你能够循序渐进地掌握AI核心技术，同时，我会一直陪伴你学习，有问题随时问我！"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white/80 tracking-wider">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{children}</div>
    </section>
  )
}

function CardContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>
}

export default function ClientView({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: any
}) {
  const { theme, setTheme } = useCardTheme()
  const { theme: chartTheme, setTheme: setChartTheme } = useDataChartTheme()

  // State and animation logic is now managed here
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set())
  const [showFullPlan, setShowFullPlan] = useState(false)

  const typedReason = useTypewriter(recommendationReason, 30)
  const typedStep1Explanation = useTypewriter(expandedSteps.has("step1") ? stepExplanations.step1 : "", 30)
  const typedStep2Explanation = useTypewriter(expandedSteps.has("step2") ? stepExplanations.step2 : "", 30)
  const typedStep3Explanation = useTypewriter(expandedSteps.has("step3") ? stepExplanations.step3 : "", 30)

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId)
    } else {
      newExpanded.add(stepId)
    }
    setExpandedSteps(newExpanded)
  }

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const upcomingDate = new Date()
  upcomingDate.setDate(upcomingDate.getDate() + 3)

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +upcomingDate - +new Date()
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [upcomingDate])

  const courseListGridData = {
    courses: [
      {
        imageUrl: "/course-thumbnail-1.png",
        title: "人工智能深度学习工程师",
        instructorName: "李老师",
        instructorAvatarUrl: "/instructor-avatar.png",
        lessonCount: 48,
        price: "¥ 2,499",
        buttonText: "立即报名",
      },
      {
        imageUrl: "/course-thumbnail-2.png",
        title: "Web开发全栈",
        instructorName: "张老师",
        instructorAvatarUrl: "/instructor-avatar.png",
        lessonCount: 60,
        price: "¥ 3,199",
        buttonText: "立即报名",
      },
    ],
  }

  const aiLearningCardProps = {
    title: "Advanced AI for Modern Education",
    description:
      "Explore the frontiers of artificial intelligence and its applications in creating dynamic learning experiences.",
    imageUrl: "/course-thumbnail-1.png",
    tags: ["AI", "Machine Learning", "Education Tech"],
    dict: dictionary.cardSdk.education.aiLearningCard,
  }

  return (
    <DataChartThemeProvider>
      <div className="p-8 space-y-12">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tighter">{dictionary.cards.title}</h1>
          <div className="flex items-center gap-4">
            <LocalCardThemeEditor />
            <CardThemePicker theme={theme} setTheme={setTheme} />
            <ChartThemePicker theme={chartTheme} setTheme={setChartTheme} />
          </div>
        </header>

        <Section title="Functional Cards">
          <div className="col-span-full">
            <AiLearningCard
              {...aiLearningCardProps}
              // Pass all state and handlers as props
              expandedSteps={expandedSteps}
              onStepToggle={toggleStep}
              showFullPlan={showFullPlan}
              onShowFullPlanToggle={() => setShowFullPlan(!showFullPlan)}
              typedReason={typedReason}
              typedStep1Explanation={typedStep1Explanation}
              typedStep2Explanation={typedStep2Explanation}
              typedStep3Explanation={typedStep3Explanation}
              courseSections={defaultCourseSections}
              books={defaultBooks}
              papers={defaultPapers}
              individualCourses={defaultIndividualCourses}
            />
          </div>
        </Section>

        <Section title="Content Cards">
          <CardContainer>
            <FullBleedImageCard imageUrl="/abstract-landscape.png" altText="Abstract landscape" />
          </CardContainer>
          <CardContainer>
            <OverlayTitleImageCard
              imageUrl="/majestic-mountain-vista.png"
              altText="Mountain scenery"
              title="探索未知"
            />
          </CardContainer>
          <CardContainer>
            <TitleBelowImageCard
              imageUrl="/forest-trail.png"
              altText="Forest trail"
              title="林间小径"
              subtitle="大自然的静谧邀请"
            />
          </CardContainer>
          <CardContainer>
            <ButtonImageCard
              imageUrl="/serene-lake.png"
              altText="Serene lake"
              title="静谧湖泊"
              subtitle="享受片刻的宁静"
              buttonText="即刻预订"
            />
          </CardContainer>
          <CardContainer>
            <BorderedImageCard imageUrl="/modern-architecture-cityscape.png" altText="Modern architecture" />
          </CardContainer>
          <CardContainer>
            <ImageLeftContentRightCard
              imageUrl="/futuristic-city-street.png"
              altText="Futuristic city street"
              title="未来都市"
              subtitle="科技与生活的完美融合"
            />
          </CardContainer>
          <div className="col-span-full">
            <TagCard
              tags={[
                { id: "1", name: "人工智能" },
                { id: "2", name: "机器学习" },
                { id: "3", name: "深度学习" },
              ]}
            />
          </div>
        </Section>

        <Section title="Education Cards">
          <CardContainer>
            <CourseOverviewCard
              imageUrl="/course-thumbnail-1.png"
              title="人工智能深度学习工程师"
              instructorName="李老师"
              instructorAvatarUrl="/instructor-avatar.png"
              lessonCount={48}
              price="¥ 2,499"
              buttonText="立即报名"
            />
          </CardContainer>
          <CardContainer>
            <LessonProgressCard
              icon={<BrainCircuit />}
              courseTitle="机器学习实战"
              currentLesson="第5章：支持向量机"
              progress={68}
              buttonText="继续学习"
            />
          </CardContainer>
          <CardContainer>
            <InstructorProfileCard
              avatarUrl="/instructor-avatar.png"
              name="王教授"
              bio="专注于人工智能领域研究与教学十年，致力于培养下一代AI人才。"
              courseCount={12}
              studentCount={8500}
              buttonText="关注讲师"
            />
          </CardContainer>
          <CardContainer>
            <CertificateCard
              courseName="Python数据分析与可视化"
              userName="张三"
              completionDate="2023年10月26日"
              certificateId="CERT-20231026-8B3D"
              buttonText="查看证书"
            />
          </CardContainer>
          <CardContainer>
            <UpcomingLiveSessionCard
              title="直播：大语言模型前沿技术"
              instructorName="赵博士"
              startTime={upcomingDate}
              buttonText="预约直播"
              timeLeft={timeLeft}
            />
          </CardContainer>
          <CardContainer>
            <CourseListSimple
              title="课程章节"
              lessons={[
                { title: "1. 欢迎来到课程", duration: "05:30", isCompleted: true },
                { title: "2. 机器学习简介", duration: "15:00", isCompleted: true },
              ]}
            />
          </CardContainer>
          <div className="col-span-full">
            <CourseDisplay variant="grid" {...courseListGridData} />
          </div>
        </Section>

        <Section title="Education List/Grid Cards">
          <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CourseListDetailed
              courses={[
                {
                  imageUrl: "/course-thumbnail-2.png",
                  title: "深度学习入门到实践",
                  description: "基于PyTorch，从零开始构建神经网络，并应用于图像识别、自然语言处理等多个实战项目。",
                  instructorName: "刘老师",
                  instructorAvatarUrl: "/instructor-avatar.png",
                  buttonText: "查看详情",
                },
                {
                  imageUrl: "/course-thumbnail-3.png",
                  title: "强化学习探索",
                  description: "探索强化学习的核心概念，包括Q-learning, SARSA, 和深度Q网络(DQN)，并解决经典控制问题。",
                  instructorName: "孙老师",
                  instructorAvatarUrl: "/instructor-avatar.png",
                  buttonText: "查看详情",
                },
              ]}
            />
          </div>
          <div className="col-span-full">
            <CourseOutline
              title="课程大纲"
              section={{
                title: "第一部分：机器学习基础",
                type: "理论与实践",
                totalHours: "约20小时",
                modules: [
                  {
                    title: "模块一：环境搭建与基础",
                    lessons: [
                      { id: 1, title: "课程介绍", duration: "15:00" },
                      { id: 2, title: "安装Python和Jupyter", duration: "30:00" },
                    ],
                  },
                  {
                    title: "模块二：核心算法",
                    lessons: [
                      { id: 3, title: "线性回归", duration: "01:30:00" },
                      { id: 4, title: "逻辑回归", duration: "01:45:00" },
                    ],
                  },
                ],
              }}
            />
          </div>
        </Section>

        <Section title="E-commerce Cards">
          <CardContainer>
            <ProductGridCard
              imageUrl="/product-watch.png"
              title="智能运动手表"
              price="¥ 899"
              rating={4.5}
              reviewCount={120}
            />
          </CardContainer>
          <CardContainer>
            <ProductListCard
              imageUrl="/product-drone.png"
              title="高清航拍无人机"
              price="¥ 3,499"
              description="4K高清摄像头，30分钟续航，智能跟随模式。"
              rating={4.8}
              reviewCount={85}
            />
          </CardContainer>
          <CardContainer>
            <CartItemCard imageUrl="/product-vr-headset.png" title="沉浸式VR眼镜" price="¥ 1,999" quantity={1} />
          </CardContainer>
          <CardContainer>
            <OrderSummaryCard subtotal={2898} shipping={0} tax={134.5} total={3032.5} buttonText="前往支付" />
          </CardContainer>
          <CardContainer>
            <PromotionCard
              title="双十一狂欢"
              description="全场商品享8折优惠，限时抢购！"
              promoCode="DOUBLE11"
              buttonText="复制优惠码"
            />
          </CardContainer>
          <CardContainer>
            <CategoryCard imageUrl="/category-electronics.png" categoryName="数码产品" />
          </CardContainer>
          <CardContainer>
            <ReviewCard
              avatarUrl="/user-review-avatar.png"
              userName="科技爱好者"
              rating={5}
              reviewText="这款无人机太棒了！操作简单，画质清晰，续航也很给力，非常满意的一次购物体验。"
              date="2023-10-20"
            />
          </CardContainer>
          <CardContainer>
            <ShippingOptionCard methodName="顺丰速运" deliveryTime="预计1-2天送达" price={0} isSelected={true} />
          </CardContainer>
        </Section>

        <Section title="Base Card Example">
          <CardContainer>
            <BaseCard>
              <p>{dictionary.cards.baseCardExample}</p>
            </BaseCard>
          </CardContainer>
        </Section>
      </div>
    </DataChartThemeProvider>
  )
}
