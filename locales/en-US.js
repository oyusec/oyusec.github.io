export default {
  about: "About",
  note: "DEMO VERSION",
  site_description:
    "This is an experimental version. If there are any errors or not working thing, please contact us for assistance.",
  name: "Name",
  category: "Category",
  state: "State",
  flag: "Flag",
  description: "Description",
  rule: "Rule",
  prizes: "Prizes",
  sponsor: "Sponser",
  decay: "Decay",
  loading: "Loading",
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
  user_type: "User Type",
  challenge_name: "Challenge Name",
  competition_notfound: "No competition found",
  solvedChallenges: "Solved Challenges",
  createAccount: "Create Account",
  day: "Day",
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
  pages: {
    index: {
      title: "Homepage",
    },
    competition: {
      title: "Competitions",
    },
  },
  drawer: {
    leftMenu: [
      {
        icon: "mdi-sword-cross",
        color: "green accent-4",
        title: "Practice",
        link: "/challenges",
      },
      {
        icon: "mdi-sword",
        color: "blue ligthen-2",
        title: "Compete",
        link: "/competitions",
      },
      {
        icon: "mdi-chart-histogram",
        color: "yellow darken-2",
        title: "Rank",
        link: "/scoreboard",
      },
    ],
    authMenu: [
      {
        icon: "mdi-account-plus",
        color: "green accent-4",
        name: "Register",
        link: "/register",
      },
      {
        icon: "mdi-login",
        color: "orange darken-4",
        name: "Login",
        link: "/login",
      },
    ],
    loggedMenu: { title: "Logout" },
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
  competition: {
    menu: ["Live", "Upcoming", "Archived"],
    slugMenu: ["About", "Challenges", "Scoreboard"],
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
}
