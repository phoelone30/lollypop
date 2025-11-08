const mm = {
  title: "သင်၏ PUBG MOBILE UC ကို ငွေဖြည့်ပါ။",
  subtitle: "ယုံကြည် • မြန်ဆန် • စိတ်ချ ရသော ဝန်ဆောင်မှု",
  orderBtn: "🚀 အော်ဒါတင်ရန်",
  fastTitle: "⚡ လျင်မြန်စွာပေးပို့မှု",
  fastDesc: "ငွေပေးချေပြီးနောက် မိနစ်အနည်းငယ်အတွင်း UC ဖြည့်ပေးသွားပါမည်။",
  secureTitle: "🔒 လုံခြုံစိတ်ချရသော ငွေပေးချေမှု",
  secureDesc: "WavePay, KBZPay စသည်တို့ဖြင့် အသုံးပြုနိုင်ပါသည်။",
  supportTitle: "💬 ၂၄ နာရီဝန်ဆောင်မှု ",
  supportDesc: "PUBG ကစားသူများအတွက် ၂၄ နာရီ ဝန်ဆောင်မှုပေးလျက်ရှိပါသည်။",
  contact: "📞 ၀၉-၄၀၇၇၆၅၈၂၀ | ✉️ support@uc-topup.com",
  gmail: "✉️ khatbdee@gmail.com",
  follow: "လိုက်နာရန်: 📸 ဖေ့စ်ဘုတ် | ✈️ တယ်လီဂရမ်",
};

const en = {
  title: "🔵 Top-up Your  PUBG MOBILE UC",
  subtitle: "Fast • Reliable • Trustworthy Service.",
  orderBtn: "🚀 Order Now",
  fastTitle: "⚡ Fast Delivery",
  fastDesc: "Receive your UC within minutes after payment.",
  secureTitle: "🔒 Secure Payment",
  secureDesc: "WavePay, KBZPay, OnePay and more supported.",
  supportTitle: "💬 24/7 Support",
  supportDesc: "Always here to service PUBG players anytime.",
  contact: "📞 +95-9407765820",
  gmail: "✉️ khatbdee@gmail.com",
  follow: "Follow us: 📸 FB | ✈️ Telegram",
};

// buttons
const langEn = document.getElementById("lang-en");
const langMm = document.getElementById("lang-mm");

function setLang(lang) {
  const data = lang === "mm" ? mm : en;
  Object.entries(data).forEach(([key, value]) => {
    const el = document.getElementById(key);
    if (el) el.innerText = value;
  });

  // toggle active class
  if (lang === "mm") {
    langEn.classList.remove("active");
    langMm.classList.add("active");
  } else {
    langMm.classList.remove("active");
    langEn.classList.add("active");
  }
}

langEn.addEventListener("click", () => setLang("en"));
langMm.addEventListener("click", () => setLang("mm"));
