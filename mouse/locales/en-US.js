export default {
  about: "About",
  name: "Name",
  challenge: "Challenge",
  community: "Community",
  competition: "Competition",
  learn: "Learn",
  academy: "Academy",
  category: "Category",
  state: "State",
  flag: "Flag",
  description: "Description",
  solution: "Solution",
  rule: "Rule",
  prizes: "Prizes",
  sponsor: "Sponser",
  decay: "Decay",
  loading: "Loading",
  player: "Player",
  topPlayers: "Top players",
  todayTopPlayer: "Today top player",
  comingSoon: "Coming soon",
  yes: "Yes",
  no: "No",
  are_you_sure: "Are you sure ?",
  search: "Search",
  rating: "Rating",
  all_challenges: "All Challenges",
  minimum_value: "Minimum Value",
  contact: "Join Us",
  solved: "Solved",
  point: "Point",
  score: "Score",
  submit: "Submit",
  content: "Content",
  cost: "Cost",
  days: "Days",
  fullName: "Full Name",
  user_type: "User Type",
  challenge_name: "Challenge Name",
  noCompetitionFound: "No competition found",
  solvedChallenges: "Solved Challenges",
  youHaveSolvedThisChallenge: "You have solved this challenge",
  youHaveAddedThisChallenge: "You have added this challenge",
  competitionHistory: "Competition History",
  competitionOver: "Competition Is Over",
  createAccount: "Create Account",
  weNeverAbleToSeeYourPassword: "We never able to see your password",
  haveAnAccount: "Have an account ?",
  dontHaveAnAccount: "Don't have an account ?",
  forgetYourPassword: "Forget your password ?",
  timeLeft: "Time left",
  markAsComplete: "Mark as complete",
  day: "Day",
  edit: "Edit",
  upcomingContest: "Upcoming contest",
  hour: "Hour",
  min: "Min",
  sec: "Sec",
  login: "Login",
  username: "Username",
  email: "Email",
  password: "Password",
  endsAt: "Ends At",
  startsAt: "Starts At",
  finished: "Finished",
  location: "Location",
  enrollment: "Enrollment",
  rank: "Rank",
  user: "User",
  added: "Added",
  logout: "Logout",
  postedAt: "Posted at",
  loginRequired: "Login required",
  hideSolvedChallenges: "Hide solved challenges",
  hint: "Hint",
  publish: "Publish",
  // rules
  max25Character: "Max 25 characters",
  required: "Required",
  limitPass: "Must be more than 8 characters",
  letterOnly: "Please enter characters only",
  checkAgain: "Please check again",

  // placeholders
  exFileName: "My Secret File",
  exCategory: "Forensics",
  exDescription:
    "You can **bold** and _italic_ text.\n> Also you can write note\n[Download](https://your-file-end-url.com)",
  exFlag: "oyusec{.*}",
  writeups: "Writeups",
  // pages
  pages: {
    index: {
      title: "Homepage",
      challengeDescription:
        "Test your skills on information security and networking policies, score points and compete with others in a fun way.",
      communityDescription:
        "Build relationships with others, share your thoughts, and learn from each other's experiences. Feel free to contact us when you have any questions",
      competitionDescription:
        "You can participate in competitions, collect points and compete with others to improve your rank. We will announce the results of the competition on our website.",
      academyDescription:
        "We will teach beginners in an interesting way to learn about cybersecurity-related things, simple CTF challenges, guides, Linux operation systems, etc.",
      description: [
        "Learn cyber security",
        "Sharpen your skills",
        "Compete others",
        "OyuSec",
        "Challenge your friends",
        "Be a top player",
      ],
    },
    competition: {
      title: "Competitions",
    },
    challenges: {
      title: "Challenges",
    },
    academy: {
      title: "Academy",
    },
    contribute: {
      title: "Contribute",
    },
    rankings: {
      title: "Rankings",
    },
    register: {
      title: "Register",
    },
    login: {
      title: "Login",
    },
  },
  drawer: {
    leftMenu: [
      {
        icon: "mdi-home",
        color: "orange darken-3",
        title: "Home",
        link: "/",
      },
      {
        icon: "mdi-sword",
        color: "cyan accent-3",
        title: "Practice",
        link: "/challenges",
      },
      {
        icon: "mdi-trophy",
        color: "pink",
        title: "Compete",
        link: "/competitions",
      },
      {
        icon: "mdi-school-outline",
        color: "light-green accent-3",
        title: "Academy",
        link: "/academy",
      },
      {
        icon: "mdi-chart-line",
        color: "yellow darken-3",
        title: "Scoreboard",
        link: "/scoreboard",
      },
      {
        icon: "mdi-script-text-outline",
        color: "deep-purple lighten-2",
        title: "Writeups",
        link: "/writeups",
      },
      {
        icon: "mdi-cards-heart",
        color: "#e31b23",
        title: "Contribute",
        link: "/contribute",
      },
    ],
    authMenu: [
      {
        icon: "mdi-login",
        color: "orange darken-4",
        name: "Login",
        link: "/auth",
      },
    ],
  },
  topBar: {
    adminMenu: [
      {
        icon: "mdi-wrench",
        title: "Config",
        color: "red",
        to: "/admin/config",
      },
      {
        icon: "mdi-sword-cross",
        title: "Challenges",
        color: "blue",
        to: "/admin/challenges",
      },
    ],
  },
  profileTab: {
    authMenu: [
      { title: "General", icon: "mdi-account-outline" },
      { title: "Teams", icon: "mdi-account-group" },
      {
        title: "Edit",
        icon: "mdi-account-edit",
      },
    ],
    menu: [
      { title: "General", icon: "mdi-account-outline" },
      { title: "Teams", icon: "mdi-account-group" },
    ],
  },
  challengesTab: {
    menu: [
      { title: "Forensics", icon: "mdi-file-search" },
      { title: "Misc", icon: "mdi-puzzle" },
      { title: "Crypto", icon: "mdi-lock" },
      { title: "Web", icon: "mdi-web" },
      { title: "Pwn", icon: "mdi-skull-outline" },
      { title: "Reversing", icon: "mdi-bug" },
      { title: "Requested", icon: "mdi-cube-scan" },
    ],
  },
  competitionTab: {
    menu: [
      { title: "Live", icon: "mdi-fire" },
      { title: "Upcoming", icon: "mdi-circle-slice-5" },
      { title: "Archived", icon: "mdi-archive" },
    ],
    slugMenu: [
      { title: "About", icon: "mdi-script-text-outline" },
      { title: "Challenges", icon: "mdi-sword-cross" },
      { title: "Scoreboard", icon: "mdi-chart-line" },
      { title: "Statistic", icon: "mdi-chart-bar" },
    ],
  },
  userTab: {
    profile: {
      competitionTab: [
        { name: "Place" },
        { name: "Event" },
        { name: "CTF points" },
        { name: "Rating points" },
      ],
      solvesTab: [
        { name: "Date" },
        { name: "Category" },
        { name: "Name" },
        { name: "Point" },
      ],
    },
  },
  contribute: {
    tab: [
      { name: "Challenge", icon: "mdi-sword-cross" },
      { name: "Writeup", icon: "mdi-script-text-outline" },
      // { name: "Standart", icon: "mdi-sword" },
    ],
  },
  scoreboard: {
    headers: [
      {
        text: "Rank",
        align: "center",
        sortable: false,
        value: "place",
        width: "10%",
      },
      {
        text: "Player",
        value: "username",
        sortable: false,
        width: "15%",
      },
      {
        text: "Challenges",
        value: "total_solved_challs",
        sortable: true,
        width: "15%",
        align: "center",
      },
      {
        text: "Ownership",
        value: "progress",
        sortable: false,
        align: "center",
        width: "20%",
      },
      {
        text: "Competition",
        value: "total_rating",
        sortable: true,
        align: "center",
        width: "20%",
      },
    ],
  },
  admin: {
    challengesTab: [
      { name: "Standart", icon: "mdi-sword" },
      { name: "Dynamic", icon: "mdi-sword-cross" },
      { name: "Challenges" },
      { name: "Challenge" },
    ],
    challengesHeaders: [
      { text: "Name", value: "name", sortable: false },
      { text: "Category", value: "category", sortable: false },
      { text: "Score", value: "value" },
      { text: "Type", value: "type", sortable: false },
      { text: "State", value: "state", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    challengeEditHintHeaders: [
      { text: "Content", value: "content", sortable: false },
      { text: "Cost", value: "cost", sortable: false },
      { text: "State", value: "state", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    challengeEditFlagHeaders: [
      { text: "Content", value: "content", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    challengeEditTagHeaders: [
      { text: "Content", value: "content", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    challengeEditTab: ["General", "Hints", "Flag", "Tag"],
  },
};
