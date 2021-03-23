export default {
  about: "Тухай",
  note: "ТУРШИЛТЫН ХУВИЛБАР",
  site_description:
    "Энэ бол туршилтийн хувилбар. Хэрвээ ямар нэгэн алдаа, дутагдалтай зүйл гарвал бидэнтэй холбогдож туслана уу.",
  description: "Тайлбар",
  name: "Нэр",
  category: "Төрөл",
  flag: "Флаг",
  state: "Төлөв",
  rule: "Дүрэм",
  prizes: "Шагнал",
  sponsor: "Ивээн тэтгэгч",
  decay: "Буурах хувь",
  content: "Агуулга",
  rating: "Үнэлгээ",
  cost: "Зардал",
  minimum_value: "Хамгийн бага оноо",
  search: "Хайх",
  are_you_sure: "Та итгэлтэй байна уу ?",
  yes: "Тийм",
  no: "Үгүй",
  loading: "Уншиж байна",
  all_challenges: "Бүх бодлогууд",
  contact: "Бидэнтэй нэгдээрэй",
  solved: "Бодсон",
  point: "Оноо",
  score: "Оноо",
  submit: "Илгээх",
  days: "Өдөр",
  day: "Өдөр",
  hour: "Цаг",
  min: "Мин",
  sec: "Сек",
  user_type: "Хэрэглэгчийн Төрөл",
  createAccount: "Хаяг нээх",
  challenge_name: "Бодлогын нэр",
  login: "Нэвтрэх",
  username: "Нэр",
  email: "Имэйл",
  password: "Нууц үг",
  solvedChallenges: "Бодсон бодлогууд",
  competition_notfound: "Тэмцээн олдсонгүй",
  endsAt: "Дуусна",
  startsAt: "Эхэлнэ",
  finished: "Дууссан",
  location: "Байршил",
  enrollment: "Элсэлт",
  rank: "Байр",
  user: "Хэрэглэгч",
  pages: {
    index: {
      title: "Нүүр хуудас",
    },
    competition: {
      title: "Тэмцээн",
    },
  },
  drawer: {
    leftMenu: [
      {
        icon: "mdi-sword-cross",
        color: "green accent-4",
        title: "Бодлого",
        link: "/challenges",
      },
      {
        icon: "mdi-sword",
        color: "blue ligthen-2",
        title: "Тэмцээн",
        link: "/competitions",
      },
      {
        icon: "mdi-chart-histogram",
        color: "yellow darken-2",
        title: "Самбар",
        link: "/scoreboard",
      },
    ],
    loggedMenu: { title: "Гарах" },
    authMenu: [
      {
        icon: "mdi-account-plus",
        color: "green accent-4",
        name: "Бүртгүүлэх",
        link: "/register",
      },
      {
        icon: "mdi-login",
        color: "orange darken-4",
        name: "Нэвтрэх",
        link: "/login",
      },
    ],
  },
  topBar: {
    adminMenu: [
      {
        icon: "mdi-wrench",
        title: "Тохиргоо",
        color: "red",
        to: "/admin/config",
      },
      {
        icon: "mdi-sword-cross",
        title: "Бодлогууд",
        color: "blue",
        to: "/admin/challenges",
      },
    ],
  },
  competition: {
    menu: ["Шууд", "Удахгүй", "Дууссан"],
    slugMenu: ["Тухай", "Бодлогууд", "Онооны самбар"],
  },
  admin: {
    challengesTab: [
      { name: "Стандарт", icon: "mdi-sword" },
      { name: "Динамик", icon: "mdi-sword-cross" },
      { name: "Бодлогууд" },
      { name: "Бодлого" },
    ],
    challengesHeaders: [
      { text: "Нэр", value: "name", sortable: false },
      { text: "Ангилал", value: "category", sortable: false },
      { text: "Оноо", value: "value" },
      { text: "Төрөл", value: "type", sortable: false },
      { text: "Төлөв", value: "state", sortable: false },
      { text: "Үйлдэл:", value: "actions", sortable: false },
    ],
    challengeEditTab: ["Ерөнхий", "Зөвлөгөө", "Флаг", "Шошго"],
    challengeEditHintHeaders: [
      { text: "Агуулга", value: "content", sortable: false },
      { text: "Татвар", value: "cost", sortable: false },
      { text: "Төлөв", value: "state", sortable: false },
      { text: "Үйлдэл", value: "actions", sortable: false },
    ],
    challengeEditFlagHeaders: [
      { text: "Агуулга", value: "content", sortable: false },
      { text: "Үйлдэл", value: "actions", sortable: false },
    ],
    challengeEditTagHeaders: [
      { text: "Агуулга", value: "content", sortable: false },
      { text: "Үйлдэл", value: "actions", sortable: false },
    ],
  },
}
