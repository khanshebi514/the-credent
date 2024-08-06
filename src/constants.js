import { Dropdown } from "antd"
import Link from "next/link"
import { space } from "postcss/lib/list"

export const SPECIOAL_OPTIONS = [
    {
        value:"101",
        label:"Allergist",
    },
    {
        value:"102",
        label:"Abdominal Radiologist",
    },
    {
        value:"103",
        label:"Addiction Specialist",
    },
    {
        value:"104",
        label:"Adult Nurse Practitioner",
    },
    {
        value:"105",
        label:"Burn Surgeon",
    },

]

export const MENU_ITEM = [
    {
        label:(<Link href='/'>Home</Link>),
        key:'1',
        path:'/'
    },

    {
        label:(<Link href='/services'>Services</Link>),
        key:'2',
        path:'/services',
        subItem:true,
        children:[
            {
            label:(<Link href={'services/commercial-insurance-credentialing'}>Commercial insurance Credentialing</Link>),
            key:'201',
            path:'commercial-insurance-credentialing',
            },

            {
                label:(<Link href={'goverment-insurance-credentialing'}>Government insurance Credentialing</Link>),
                key:'202',
                path:'goverment-insurance-credentialing',
            },
            {
                label:'IPA Enrollement Services',
                key:'203',
                path:'ipa-enrollement-services',
            },
            {
                label:'Insurance Contract Rate Negotiations',
                key:'204',
                path:'insurance-contract-rate-regotiations',
            },
            {
                label:'Revalidation and Recredentialing',
                key:'205',
                path:'revalidation-and-recredentialing',
            },
            
        ]
        
    },

    {
        label:(<Link href='/pricing'>Pricing</Link>),
        key:'3',
        path:'pricing'
    },
    {
        label:(<Link href='/fourm'>Fourm</Link>),
        key:'4',
        path:'forum'
    },
    {
        label:(<Link href='/blogs'>Blogs</Link>),
        key:'5',
        path:'blogs',
    },
    {
        label:(<Link href='/company'>Company</Link>),
        key:'6',
        path:'company'
    },
]

export const WHEN_NEED_CREDENTIALING = {
    image:'/images/Group-91.png',
    title:'When Do You Need Credentialing Services',
    points:[
        'Setting up on a New Practice Journey',
        'Transitioning Between Physician Practice Groups',
        'Exploring New Affiliations',
        'Enrollment with New Payers',
        'Ongoing Credentialing Management',
    ]
}

export const STREAMLINE_CREDENTILING = {
    image:'/images/Group-11.png',
    title:'STREAMLINING CREDENTIALING',
    points:[
        'Update & Oversight',
        'Progress Tracking',
        'Timely Submissions',
        'CAQH Management',
        'Verification & Screening',
        'Deadline Management',
    ]
}

export const HOW_GO_ABOUT_CRED = {
    image:'/images/Group-32.png',
    title : 'HOW WE GO ABOUT CREDENTIALING?',
    points:[
        'Thorough Documentation',
        'Comprehensive Research Analysis',
        'Adherence to State Guidelines',
        'Alignment with Payer Guidelines',
        'Verification & Screening',
        'Successful Panel Opening',
    ]
}

export const WEB_CONTENT=[
    {
    key:1,
    title:'Commercial Insurance Credentialing',
    services:[
               {
                key:101,
                title:'MEDICAL CREDENTIALING SERVICES',
                description:'We offer comprehensive Medical Credentialing Services dedicated to simplifying and enhancing the often complex and time-consuming credentialing process for healthcare providers.',
                },

                {
                    key:102,
                    title:'DENTAL CREDENTIALING SERVICES',
                    description:'Our Dental Credentialing Services leave no room for compromise and are committed to guaranteeing that dental professionals achieve effective and spotless credentialing.'
                },
                {
                    key:103,
                    title:'VISION CREDENTIALING SERVICES',
                    description:'When it comes to vision care providers, precision is the most redeeming quality. We offer specialized expertise in securing your credentialing, leaving no room for any error to occur.'
                },
                {
                    key:104,
                    title:'MENTAL CREDENTIALING SERVICES',
                    description:'We have a seasoned team of professionals, capable of meeting the distinctive requirements of mental health credentialing, guaranteeing that your practice achieves full accreditation and recognition.'
                },

                
        ],

    },

    {
        key:2,
        title:'Government Insurance Credentialing',
        services:[
            {
                key:201,
                title:'MEDICAL CREDENTIALING SERVICES',
                description:'We certify that your medical practice is in accordance with industry standards and regulatory requirements through our expertise in medical credentialing.'
            },
            {
                key:202,
                title:'DENTAL CREDENTIALING SERVICES',
                description:'We offer expedited dental credentialing services to help you get your new practice in-network quickly and start seeing patients.',
            },

            {
                key:203,
                title:'MENTAL CREDENTIALING SERVICES',
                description:'We understand the unique challenges that come with mental health credentialing, and we work with you to ensure that the process is as smooth and efficient as possible.'
            },

            {
                key:303,
                title:'VISION CREDENTIALING SERVICES',
                description:'Ensure your vision practice is in compliance with industry standards and regulatory requirements by partnering with our experienced team of vision credentialing specialists.',

            }
        ]
    }
   
]

export const OFFERS = [
    {
        image:'/images/Group-34.png',
        title :"Insurance Contract Rate Negotiations",
        description:"We strive for high reimbursement rates, reduced administrative burdens, and effective dispute resolution. We're well-versed in value-based care contract negotiations to enhance care quality and increase revenue. Our comprehensive services include market analysis for fair rates, tailored negotiation strategies, contract drafting, negotiation management, and ongoing guidance.",
        button:'LEARN MORE'

    },

    {
        image:'/images/Group-35.png',
        title :"IPA Enrollment",
        description:"We facilitate enrollment with Independent Physician Associations (IPA) for access to a wide patient and payer network. Our services cover IPA selection, application completion, document submission, follow-up, and issue resolution. We provide ongoing support to maintain IPA enrollment and compliance with updated standards.",
        button:'LEARN MORE'

    },
    {
        image:'/images/Group-16.png',
        title :"Revalidation and Recredentialing",
        description:"We assist healthcare providers in renewing and maintaining credentials, ensuring compliance with the latest regulations and payer requirements. Our services include deadline tracking, application assistance, documentation collection, follow-up, and issue resolution for hassle-free revalidation and recredentialing.",
        button:'LEARN MORE'

    },
]

export const COMM_INNSU_CRED = {
    'intro':{
        "title":"What is Commercial Insurance Credentialing?",
        "description":"Commercial insurance credentialing is the process by which healthcare providers are approved to participate in a commercial insurance company's network. This process involves verifying the provider's education, training, experience, and licensure. It also involves ensuring that the provider meets the insurance company's quality standard."
    },
    'process':{
        'process-1':{
            '1':'Insurances',
            '2':'Boarded',
            '3':'Recommended',
            '4':'Medical Oversight',
            '5':'Disciplinary',
            '6':'Affiliations',
            '7':'Interview',
        },

      'process-2':{
                '1':'Complete Application Forms',
                '2':'Gather Required Documents',
                '3':'Track Application Status',
                '4':'Resolve Application Issues',
                '5':'Provide Ongoing Support',
      },

      
      'process-3':{
        '1':'Maximize Reimbursements',
        '2':'Access to a Larger Patient Base',
        '3':'Increased Patient Trust',
        '4':'Streamlined Billing and Claims',
        '5':'Compliance and Quality',
}
    },
    'services':[
        {
            'key':2001,
            "title":'Medical Credentialing Services',
            "description":"Our Medical Credentialing Services simplify and enhance the credentialing process for healthcare providers."
        },

        {
            'key':2002,
            "title":'Dental Credentialing Services',
            "description":"Our Dental Credentialing Services leave no room for compromise and are committed to guaranteeing that dental professionals achieve effective and spotless credentialing."
        },

        {
            'key':2003,
            "title":'Vision Credentialing Services',
            "description":"When it comes to vision care providers, precision is the most redeeming quality. We offer specialized expertise in securing your credentialing, leaving no room for oversight."
        },

       {
            'key':2004,
            "title":'Mental Credentialing Services',
            "description":"Our team excels by living up to the unique demands of mental health credentialing, ensuring your practice is fully accredited and recognized."
        }
    ]
}