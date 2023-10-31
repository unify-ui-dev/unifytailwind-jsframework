import {
    Navbar1,
    Navbar2,
    Navbar3,
    Navbar4,
    Navbar5,
    Navbar6,
    Navbar7
} from "../components/application-ui/navbars"

import {
    Sidebar1,
    Sidebar2,
    Sidebar3,
    Sidebar4
} from "../components/application-ui/sidebars"

import {
    BlogSection1,
    BlogSection2,
    BlogSection3, 
    BlogSection4, 
    BlogSection5, 
    BlogSection6, 
    BlogSection7, 
    BlogSection8
} from "../components/blog-sections"
import {
    ContentSection1, ContentSection2, ContentSection3,
    ContentSection4
} from "../components/content"
import { CtaSection1, CtaSection2, CtaSection3, CtaSection4, CtaSection5, CtaSection6 } from "../components/cta"
import { Features1, Features10, Features11, Features12, Features13, Features2, Features3, Features4, Features5, Features6, Features7, Features8, Features9 } from "../components/features-services"
import { Footer1, Footer2, Footer3, Footer4, Footer5, Footer6 } from "../components/footer"
import { AgencyHero, ArchitectureHero, CreativeHero, DigitalHero, GroceryHero, HealthCareHero, HeroAgency, MediCareHero, PersonnalHero, PodcastAgencyHero, PodcastHero, SaasHero, SaasProductHero, SoftwareAgencyHero, TransportationHero } from "../components/hero-sections"
import { LogoCloud1, LogoCloud2, LogoCloud3 } from "../components/logo-cloud"
import { Metrics1, Metrics2, Metrics3, Metrics4, Metrics5, Metrics6, Metrics7 } from "../components/metrics"
import { PortfolioSection1, PortfolioSection2 } from "../components/portfolio"
import { PricingSection1, PricingSection2, PricingSection3, PricingSection4, PricingSection5 } from "../components/pricing-section"
import { TestimonialSection1, TestimonialSection2, TestimonialSection3, TestimonialSection4 } from "../components/testimonial_success"

const blockRoutes = [
    {
        id: 1,
        root: "/hero-sections",
        items: [
            {
                id: 1,
                path: "/agency",
                component: <AgencyHero />
            },
            {
                id: 2,
                path: "/architecture/",
                component: <ArchitectureHero />
            },
            {
                id: 3,
                path: "/creative-agency/",
                component: <CreativeHero />
            },
            {
                id: 4,
                path: "/digital-agency/",
                component: <DigitalHero />
            },
            {
                id: 5,
                path: "/grocerystore/",
                component: <GroceryHero />
            },
            {
                id: 6,
                path: "/healthcare/",
                component: <HealthCareHero />
            },
            {
                id: 7,
                path: "/hero-section/",
                component: <HeroAgency />
            },
            {
                id: 8,
                path: "/medcare/",
                component: <MediCareHero />
            },
            {
                id: 9,
                path: "/personnal-porfolio/",
                component: <PersonnalHero />
            },
            {
                id: 10,
                path: "/podcast/",
                component: <PodcastHero />
            },
            {
                id: 11,
                path: "/podcast-agency/",
                component: <PodcastAgencyHero />
            },
            {
                id: 12,
                path: "/saas/",
                component: <SaasHero />
            },
            {
                id: 13,
                path: "/saas-product/",
                component: <SaasProductHero />
            },
            {
                id: 14,
                path: "/software-agency/",
                component: <SoftwareAgencyHero />
            },
            {
                id: 15,
                path: "/transportation/",
                component: <TransportationHero />
            }
        ]
    },
    {
        id: 2,
        root: "/pricing-section",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <PricingSection1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <PricingSection2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <PricingSection3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <PricingSection4 />
            },
            {
                id: 5,
                path: "/5/",
                component: <PricingSection5 />
            }
        ]
    },
    {
        id: 3,
        root: "/features-services",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <Features1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <Features2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <Features3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <Features4 />
            },
            {
                id: 5,
                path: "/5/",
                component: <Features5 />
            },
            {
                id: 6,
                path: "/6/",
                component: <Features6 />
            },
            {
                id: 7,
                path: "/7/",
                component: <Features7 />
            },
            {
                id: 8,
                path: "/8/",
                component: <Features8 />
            },
            {
                id: 9,
                path: "/9/",
                component: <Features9 />
            },
            {
                id: 10,
                path: "/10/",
                component: <Features10 />
            },
            {
                id: 11,
                path: "/11/",
                component: <Features11 />
            },
            {
                id: 12,
                path: "/12/",
                component: <Features12 />
            },
            {
                id: 13,
                path: "/13/",
                component: <Features13 />
            },
        ]
    },
    {
        id: 4,
        root: "/blog-sections",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <BlogSection1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <BlogSection2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <BlogSection3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <BlogSection4 />
            },
            {
                id: 5,
                path: "/5/",
                component: <BlogSection5 />
            },
            {
                id: 6,
                path: "/6/",
                component: <BlogSection6 />
            },
            {
                id: 7,
                path: "/7/",
                component: <BlogSection7 />
            },
            {
                id: 8,
                path: "/8/",
                component: <BlogSection8 />
            }
        ]
    },
    {
        id: 5,
        root: "/testimonials",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <TestimonialSection1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <TestimonialSection2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <TestimonialSection3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <TestimonialSection4 />
            },
        ]
    },
    {
        id: 6,
        root: "/application-ui/sidebars",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <Sidebar1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <Sidebar2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <Sidebar3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <Sidebar4 />
            },
        ]
    },
    {
        id: 7,
        root: "/cta",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <CtaSection1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <CtaSection2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <CtaSection3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <CtaSection4 />
            },
            {
                id: 5,
                path: "/5/",
                component: <CtaSection5 />
            },
            {
                id: 6,
                path: "/6/",
                component: <CtaSection6 />
            },
        ]
    },
    {
        id: 8,
        root: "/content",
        items: [
            {
                id: 1,
                path: "/about/",
                component: <ContentSection1 />
            },
            {
                id: 2,
                path: "/about-2/",
                component: <ContentSection2 />
            },
            {
                id: 3,
                path: "/about-3/",
                component: <ContentSection3 />
            },
            {
                id: 4,
                path: "/image-on-right/",
                component: <ContentSection4 />
            }
        ]
    },
    {
        id: 9,
        root: "logo-cloud",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <LogoCloud1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <LogoCloud2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <LogoCloud3 />
            }
        ]
    },
    {
        id: 10,
        root: "/metrics",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <Metrics1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <Metrics2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <Metrics3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <Metrics4 />
            },
            {
                id: 5,
                path: "/5/",
                component: <Metrics5 />
            },
            {
                id: 6,
                path: "/6/",
                component: <Metrics6 />
            },
            {
                id: 7,
                path: "/7/",
                component: <Metrics7 />
            }
        ]
    },
    {
        id: 11,
        root: "/portfolio",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <PortfolioSection1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <PortfolioSection2 />
            }
        ]
    },
    {
        id: 12,
        root: "/footers",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <Footer1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <Footer2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <Footer3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <Footer4 />
            },
            {
                id: 5,
                path: "/5/",
                component: <Footer5 />
            },
            {
                id: 6,
                path: "/6/",
                component: <Footer6 />
            },
        ]
    },
    {
        id: 13,
        root: "/application-ui/navbars",
        items: [
            {
                id: 1,
                path: "/1/",
                component: <Navbar1 />
            },
            {
                id: 2,
                path: "/2/",
                component: <Navbar2 />
            },
            {
                id: 3,
                path: "/3/",
                component: <Navbar3 />
            },
            {
                id: 4,
                path: "/4/",
                component: <Navbar4 />
            },
            {
                id: 5,
                path: "/5/",
                component: <Navbar5 />
            },
            {
                id: 6,
                path: "/6/",
                component: <Navbar6 />
            },
            {
                id: 7,
                path: "/7/",
                component: <Navbar7 />
            },
        ]
    },
]

export { blockRoutes }