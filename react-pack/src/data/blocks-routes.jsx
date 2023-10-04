import { Navbar1, Navbar2, Navbar3, Navbar4, Navbar5, Navbar6, Navbar7 } from "../components/application-ui/navbars"
import { Sidebar1, Sidebar2, Sidebar3, Sidebar4 } from "../components/application-ui/sidebars"
import { AgencyHero, ArchitectureHero, CreativeHero, DigitalHero, GroceryHero, HealthCareHero, HeroAgency, MediCareHero, PersonnalHero, PodcastAgencyHero, PodcastHero, SaasHero, SaasProductHero, SoftwareAgencyHero, TransportationHero } from "../components/hero-sections"

const blockRoutes = [
    {
        id:1,
        root:"/hero-sections",
        items: [
            {
                id:1,
                path:"/agency",
                component: <AgencyHero/>
            },
            {
                id:2,
                path: "/architecture/",
                component: <ArchitectureHero/>
            },
            {
                id:3,
                path: "/creative-agency/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/digital-agency/",
                component: <DigitalHero/>
            },
            {
                id:5,
                path: "/grocerystore/",
                component: <GroceryHero/>
            },
            {
                id:6,
                path: "/healthcare/",
                component: <HealthCareHero/>
            },
            {
                id:7,
                path: "/hero-section/",
                component: <HeroAgency/>
            },
            {
                id:8,
                path: "/medcare/",
                component: <MediCareHero/>
            },
            {
                id:9,
                path: "/personnal-porfolio/",
                component: <PersonnalHero/>
            },
            {
                id:10,
                path: "/podcast/",
                component: <PodcastHero/>
            },
            {
                id:11,
                path: "/podcast-agency/",
                component: <PodcastAgencyHero/>
            },
            {
                id:12,
                path: "/saas/",
                component: <SaasHero/>
            },
            {
                id:13,
                path: "/saas-product/",
                component: <SaasProductHero/>
            },
            {
                id:14,
                path: "/software-agency/",
                component: <SoftwareAgencyHero/>
            },
            {
                id:15,
                path: "/transportation/",
                component: <TransportationHero/>
            }
        ]
    },
    {
        id:2,
        root:"/pricing-section",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/4/",
                component: <CreativeHero/>
            },
            {
                id:5,
                path: "/5/",
                component: <CreativeHero/>
            }
        ]
    },
    {
        id:3,
        root: "/features-services",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/4/",
                component: <CreativeHero/>
            },
            {
                id:5,
                path: "/5/",
                component: <CreativeHero/>
            },
            {
                id:6,
                path: "/6/",
                component: <CreativeHero/>
            },
            {
                id:7,
                path: "/7/",
                component: <CreativeHero/>
            },
            {
                id:8,
                path: "/8/",
                component: <CreativeHero/>
            },
            {
                id:9,
                path: "/9/",
                component: <CreativeHero/>
            },
            {
                id:10,
                path: "/10/",
                component: <CreativeHero/>
            },
            {
                id:11,
                path: "/11/",
                component: <CreativeHero/>
            },
            {
                id:12,
                path: "/12/",
                component: <CreativeHero/>
            },
            {
                id:13,
                path: "/13/",
                component: <CreativeHero/>
            },
        ]
    },
    {
        id:4,
        root: "/blog-sections",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/4/",
                component: <CreativeHero/>
            },
            {
                id:5,
                path: "/5/",
                component: <CreativeHero/>
            },
            {
                id:6,
                path: "/6/",
                component: <CreativeHero/>
            },
            {
                id:7,
                path: "/7/",
                component: <CreativeHero/>
            },
            {
                id:8,
                path: "/8/",
                component: <CreativeHero/>
            }
        ]
    },
    {
        id:5,
        root: "/testimonials",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/4/",
                component: <CreativeHero/>
            },
        ]
    },
    {
        id:6,
        root: "/application-ui/sidebars",
        items: [
            {
                id:1,
                path: "/1/",
                component: <Sidebar1/>
            },
            {
                id:2,
                path: "/2/",
                component: <Sidebar2/>
            },
            {
                id:3,
                path: "/3/",
                component: <Sidebar3/>
            },
            {
                id:4,
                path: "/4/",
                component: <Sidebar4/>
            },
        ]
    },
    {
        id:7,
        root: "/cta",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/4/",
                component: <CreativeHero/>
            },
            {
                id:5,
                path: "/5/",
                component: <CreativeHero/>
            },
            {
                id:6,
                path: "/6/",
                component: <CreativeHero/>
            },
        ]
    },
    {
        id:8,
        root: "/content",
        items: [
            {
                id:1,
                path: "/about/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/about-2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/about-3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/image-on-right/",
                component: <CreativeHero/>
            }
        ]
    },
    {
        id:9,
        root: "logo-cloud",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            }
        ]
    },
    {
        id:10,
        root: "/metrics",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/4/",
                component: <CreativeHero/>
            },
            {
                id:5,
                path: "/5/",
                component: <CreativeHero/>
            },
            {
                id:6,
                path: "/6/",
                component: <CreativeHero/>
            },
            {
                id:7,
                path: "/7/",
                component: <CreativeHero/>
            }
        ]
    },
    {
        id:11,
        root: "/portfolio",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            }
        ]
    },
    {
        id:12,
        root: "/footers",
        items: [
            {
                id:1,
                path: "/1/",
                component: <CreativeHero/>
            },
            {
                id:2,
                path: "/2/",
                component: <CreativeHero/>
            },
            {
                id:3,
                path: "/3/",
                component: <CreativeHero/>
            },
            {
                id:4,
                path: "/4/",
                component: <CreativeHero/>
            },
            {
                id:5,
                path: "/5/",
                component: <CreativeHero/>
            },
            {
                id:6,
                path: "/6/",
                component: <CreativeHero/>
            },
        ]
    },
    {
        id:13,
        root: "/application-ui/navbars",
        items: [
            {
                id:1,
                path: "/1/",
                component: <Navbar1/>
            },
            {
                id:2,
                path: "/2/",
                component: <Navbar2/>
            },
            {
                id:3,
                path: "/3/",
                component: <Navbar3/>
            },
            {
                id:4,
                path: "/4/",
                component: <Navbar4/>
            },
            {
                id:5,
                path: "/5/",
                component: <Navbar5/>
            },
            {
                id:6,
                path: "/6/",
                component: <Navbar6/>
            },
            {
                id:7,
                path: "/7/",
                component: <Navbar7/>
            },
        ]
    },
]

export { blockRoutes }