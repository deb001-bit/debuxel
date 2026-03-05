import {
    Bug,
    Code2,
    FileText,
    Server,
    Layers,
    GitBranch,
    LayoutDashboard,
    type LucideIcon,
} from "lucide-react";

export interface Tool {
    slug: string;
    name: string;
    shortName: string;
    description: string;
    longDescription: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    priority: "must-have" | "should-have" | "nice-to-have";
    features: string[];
    userFlow: string[];
}

export const tools: Tool[] = [
    {
        slug: "bug-fixer",
        name: "AI Bug Fixer",
        shortName: "Bug Fixer",
        description:
            "Paste error messages or stack traces and receive explanations and suggested fixes.",
        longDescription:
            "Our AI Bug Fixer analyzes your error messages, stack traces, and buggy code to provide clear explanations of what went wrong and actionable fix suggestions. Get back to building faster.",
        icon: Bug,
        color: "text-red-500",
        bgColor: "bg-red-50",
        priority: "must-have",
        features: [
            "Error message analysis",
            "Stack trace parsing",
            "Fix suggestions with code",
            "Multiple language support",
            "Context-aware debugging",
        ],
        userFlow: [
            "Open Bug Fixer tool",
            "Paste your error or code",
            'Click "Fix Error"',
            "Review AI explanation and fix",
        ],
    },
    {
        slug: "code-explainer",
        name: "AI Code Explainer",
        shortName: "Code Explainer",
        description:
            "Explains code snippets in simple terms or detailed breakdowns.",
        longDescription:
            "Understand any code in seconds. Our AI Code Explainer breaks down complex code into easy-to-understand explanations, from beginner-friendly summaries to detailed line-by-line analysis.",
        icon: Code2,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        priority: "must-have",
        features: [
            "Simple or detailed explanations",
            "Line-by-line breakdown",
            "Syntax highlighting",
            "Multiple languages",
            "Complexity analysis",
        ],
        userFlow: [
            "Paste your code",
            "Select explanation level",
            "Generate explanation",
            "Learn and understand",
        ],
    },
    {
        slug: "readme-generator",
        name: "README Generator",
        shortName: "README Gen",
        description: "Automatically generates GitHub README documentation.",
        longDescription:
            "Generate professional, comprehensive README files for your GitHub projects. Just enter your project details and get beautifully formatted markdown documentation ready to use.",
        icon: FileText,
        color: "text-green-500",
        bgColor: "bg-green-50",
        priority: "must-have",
        features: [
            "Professional markdown output",
            "Installation guides",
            "Usage examples",
            "Badge generation",
            "Copy or download",
        ],
        userFlow: [
            "Enter project details",
            "Customize sections",
            "Generate README",
            "Copy or download markdown",
        ],
    },
    {
        slug: "api-generator",
        name: "API Generator",
        shortName: "API Gen",
        description: "Generates boilerplate API structure and endpoints.",
        longDescription:
            "Describe your project and choose your framework — our API Generator creates complete API boilerplate with routes, controllers, models, and middleware. Start building immediately.",
        icon: Server,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
        priority: "must-have",
        features: [
            "Multiple framework support",
            "RESTful endpoint generation",
            "Model definitions",
            "Middleware setup",
            "Authentication boilerplate",
        ],
        userFlow: [
            "Describe your project",
            "Choose framework",
            "Generate API structure",
            "Download and start building",
        ],
    },
    {
        slug: "stack-recommender",
        name: "Stack Recommender",
        shortName: "Stack Rec",
        description: "Suggests technology stack for a project idea.",
        longDescription:
            "Not sure what technologies to use? Describe your project idea and our AI will recommend the optimal tech stack with reasoning, alternatives, and trade-offs for each choice.",
        icon: Layers,
        color: "text-teal-500",
        bgColor: "bg-teal-50",
        priority: "should-have",
        features: [
            "Personalized recommendations",
            "Trade-off analysis",
            "Alternative suggestions",
            "Scalability considerations",
            "Cost analysis",
        ],
        userFlow: [
            "Describe your project",
            "Specify requirements",
            "Get stack recommendations",
            "Compare alternatives",
        ],
    },
    {
        slug: "reverse-engineer",
        name: "Project Reverse Engineer",
        shortName: "Reverse Eng",
        description: "Analyzes GitHub repositories and explains architecture.",
        longDescription:
            "Paste a GitHub repository link and our AI will analyze its structure, identify architecture patterns, explain the codebase, and generate comprehensive documentation.",
        icon: GitBranch,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        priority: "should-have",
        features: [
            "Repository structure analysis",
            "Architecture pattern detection",
            "Dependency mapping",
            "Code flow visualization",
            "Documentation generation",
        ],
        userFlow: [
            "Paste repository link",
            "AI analyzes structure",
            "Review architecture explanation",
            "Export documentation",
        ],
    },
    {
        slug: "architecture-generator",
        name: "Architecture Generator",
        shortName: "Arch Gen",
        description: "Generates system architecture diagrams and plans.",
        longDescription:
            "Describe your system requirements and our AI will generate architecture plans, component diagrams, data flow visualizations, and implementation roadmaps.",
        icon: LayoutDashboard,
        color: "text-indigo-500",
        bgColor: "bg-indigo-50",
        priority: "nice-to-have",
        features: [
            "System architecture plans",
            "Component diagrams",
            "Data flow design",
            "Scalability planning",
            "Implementation roadmap",
        ],
        userFlow: [
            "Describe system requirements",
            "Specify constraints",
            "Generate architecture plan",
            "Iterate and refine",
        ],
    },
];
