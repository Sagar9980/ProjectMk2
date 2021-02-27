let activeUser = 1091;
let users = 320;
document.querySelector(".active-users").textContent = activeUser;
document.querySelector(".users").textContent = users;
setTimeout(() => {
  let next = activeUser + 700;
  document.querySelector(".active-users").textContent = next;
}, 2000);
setInterval(() => {
  let positiveRandom = Math.floor(Math.random() * 20);
  let negativeRandom = Math.floor(Math.random() * -20);
  let next = 1791 - positiveRandom + negativeRandom;
  document.querySelector(".active-users").textContent = next;
}, 3000);
setInterval(() => {
  let positiveRandom = Math.floor(Math.random() * 10);
  let negativeRandom = Math.floor(Math.random() * -5);
  let next = users - positiveRandom + negativeRandom;
  document.querySelector(".users").textContent = next;
}, 3000);

let username = document.querySelector(".input-username");
let connectBtn = document.querySelector(".connect-btn");
let cntUsername = document.querySelectorAll(".cnt-username");

$(document).ready(function () {
  $(".connect-btn").attr("disabled", true);
  $(".connect-btn").css("cursor", "no-drop");
  $(".input-username").keyup(function () {
    if ($(this).val.length != 0) {
      $(".connect-btn").attr("disabled", false);
      $(".connect-btn").css("cursor", "pointer");
    }
  });
});

username.addEventListener("change", (e) => {
  cntUsername.forEach((item) => {
    item.innerHTML = e.target.value;
  });
  if (e.target.value != "") {
    connectBtn.style.cursor = "pointer";
    connectBtn.disabled = false;
  }
});
let followerNum = document.querySelector(".follower-num");

let followers = document.querySelector("#followers");
followers.addEventListener("change", () => {
  followerNum.innerHTML = followers.options[followers.selectedIndex].value;
});
let mainContainer = document.querySelector(".main-container");
let modalOne = document.querySelector(".modal-one");
let modalTwo = document.querySelector(".modal-two");
let modalThree = document.querySelector(".modal-three");
let modalFour = document.querySelector(".modal-four");
let modalAd = document.querySelector(".modal-ad");
let stepOne = document.querySelector(".step-one");
let stepTwo = document.querySelector(".step-two");
connectBtn.onclick = function () {
  modalOne.style.display = "block";
  setTimeout(() => {
    let i = 0;
    if (i == 0) {
      i = 1;
      let progressOne = document.querySelector(".progress-one");
      let width = 1;
      let id = setInterval(frame, 20);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          modalOne.style.display = "none";
          stepOne.style.display = "none";
          stepTwo.style.display = "block";

          i = 0;
        } else {
          width++;
          progressOne.style.width = width + "%";
        }
      }
    }
  }, 300);
};

let gntFollower = document.querySelector(".gnt-follower");
gntFollower.onclick = function () {
  modalTwo.style.display = "block";
  let i = 0;
  if (i == 0) {
    i = 1;
    let progressTwo = document.querySelector(".progress-two");
    let width = 1;
    let id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        modalTwo.style.display = "none";
        modalThree.style.display = "block";
        let i = 0;
        if (i == 0) {
          i = 1;
          let progressThree = document.querySelector(".progress-three");
          let width = 1;
          let id = setInterval(frame, 20);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              modalThree.style.display = "none";
              modalFour.style.display = "block";
              let i = 0;
              if (i == 0) {
                i = 1;
                let progressFour = document.querySelector(".progress-four");
                let width = 1;
                let id = setInterval(frame, 20);
                function frame() {
                  if (width >= 100) {
                    clearInterval(id);
                    modalFour.style.display = "none";
                    modalAd.style.display = "block";
                    mainContainer.style.display = "none";
                    i = 0;
                  } else {
                    width++;
                    progressFour.style.width = width + "%";
                  }
                }
              }
              i = 0;
            } else {
              width++;
              progressThree.style.width = width + "%";
            }
          }
        }
        i = 0;
      } else {
        width++;
        progressTwo.style.width = width + "%";
      }
    }
  }
};
//image
$("#username-example-img-link").magnificPopup({
  type: "image",
  mainClass: "mfp-with-zoom",
  zoom: {
    enabled: true,
    duration: 300,
    easing: "ease-in-out",
    opener: function (openerElement) {
      return openerElement.is("img")
        ? openerElement
        : openerElement.find("img");
    },
  },
});

//message
$(".chat-lists").scrollTop($(document).height());
var ChatReplied = false;
var ChatDate = new Date();
let ChatUserName = "";
var ChatUserNames = [
  "TurtletheCat",
  "Pobelter",
  "EugeneJPark",
  "Doublelift",
  "C9Sneaky",
  "lamBjerg",
  "Popobelterold",
  "HOGEE",
  "WizFujiiN",
  "HotGuy6Pack",
  "dawoofsclaw",
  "TiPApollo",
  "Soeren",
  "FSNChunkyfresh",
  "Ariana22ROO",
  "Waker",
  "Podu",
  "C9Hard",
  "Shiphtur",
  "HOoZy",
  "Chapanya",
  "Dyrus",
  "Entranced",
  "WildTurtle",
  "WildTurtl",
  "lntense",
  "Hauntzer",
  "LiquidFeniX",
  "THExJOHNxCENA555",
  "Imaqtpie",
  "ZionSpartan",
  "JJackstar",
  "Ekkocat",
  "LiquidKEITH",
  "mldkingking",
  "Loopercorn",
  "TiPMa",
  "Ohhhq",
  "ninjamaster69xxx",
  "CaliTrlolz8",
  "ice",
  "C9Meteos",
  "JannaMechanics",
  "KEITHMCBRIEF",
  "dunamis",
  "Quasmire",
  "scorro",
  "LiquidQuas",
  "GVHauntzer",
  "PengYiliang",
  "Casely",
  "wahoolahoola",
  "godisfeng66666",
  "Zbuum",
  "ilovefatdongs",
  "TransIogic",
  "LemonBoy",
  "Link",
  "Chipotlehunter",
  "TDKkina",
  "DJTrance",
  "Duocek",
  "Hate",
  "KonKwon",
  "Nihillmatic",
  "Zaryab",
  "intero",
  "Biofrost",
  "LongCat4",
  "CSTJesiz",
  "GVKeane",
  "TiPyoondog",
  "RedoutabIe",
  "LiquidXpecial",
  "JayJ",
  "GVCop",
  "iKeNNyu",
  "C9Hai",
  "FunFrock",
  "CLGLourlo",
  "evertan",
  "Chaullenger",
  "Aniratak",
  "PorpoiseDeluxe",
  "Isuyu",
  "CLGDandyLite",
  "Arcsecond",
  "BloodWater",
  "Jynthe",
  "Sickoscott",
  "IREGlNALD",
];
var ChatContent = [
  "How much  IG followers can I generate?",
  "Anyone tried this already?",
  "Does it work in NA?",
  "Why this is so easy lol?",
  "This is incredible, never thought it would work.",
  "I generated 100000 IG followers, can't wait to start.",
  "ios player here, works flawless.",
  "Can someone help me with the survey?",
  "OMG!",
  "LOL!",
  "ROFL!",
  "Real",
  "haha",
  "easy",
  "bro",
  "What can I do here?",
  "Shut up man I love this website",
  "hi guys",
  "How much IG followers u made so far?",
  "what about surveys on mobile phone?",
  "Is this free?",
  "How long do you have to wait?",
  "Yea",
  "No",
  "I know",
  "Exactly why this is so good",
  "uhm",
  "maybe",
  "I can't wait anymoreeee",
  "Is this for real guys?",
  "Thanks man I appreciate this.",
  "Cool =)",
  "<message deleted>",
  "oh god",
  "damn",
  "I love this",
  "Never imagined this would work but damn its so simple",
  "saw this on forums pretty impressive",
  "yo guys dont spam okay?",
  "anyone up for a game?",
  "you think this will be patched any time soon",
  "pretty sure this is saving me a lot of money",
  "any idea how long it takes for IG followers and gems to come?",
  "so happy i found this",
  "you guys watch nightblue?",
  "I have seen this website on twitch stream i think",
  "just wow",
  "Where do I get my IG followers and gems?",
  "a friend told me about this",
  "thanks to whoever spams this website lol",
  "where i put in my code?",
  "so far I am cool with this",
  "can I get for free?",
  "bye guys",
  "if you chose an offer make sure to fully complete it, or you will not sign up for IG followers guys!",
];
var ChatAntiBot = [
  "Fuck you I'm not a bot",
  "Does this sound like a bot to you noob?",
  "yeah we're all bots Kappa",
  "bot? i'm here for spamming this shit lol",
  "are you stupid or something? they have anti bot protection",
  "sure bot, 0101010110 lmao xD",
  "no, we're not bots Kappa",
];
$(document).ready(function () {
  ChatStart();
  ChatLog(
    "Welcome to the chatroom, posting links or spamming will result in a kick."
  );
  ChatAddEntry(
    ChatUserNames[Random(0, ChatUserNames["length"] - 1)],
    ChatContent[rng(0, ChatContent["length"] - 1)]
  );
  $("#live-chat-input")["keypress"](function (_0xaa63xc) {
    if (_0xaa63xc["keyCode"] == 13) {
      $("#live-chat-button")["click"]();
    }
  });
  $("#live-chat-button")["click"](function () {
    if (ChatUserName == "") {
      $("#live-chat-name-wrapper")["fadeIn"](250);
      $(".live-chat-overlay").fadeIn(200);
    } else {
      $msg = $("#live-chat-input")["val"]();

      ChatAddEntry("<span>" + ChatUserName + "</span>", $msg);
      $("#live-chat-input")["val"]("");
      if (
        $msg.indexOf("bots") >= 0 ||
        $msg.indexOf("bot") >= 0 ||
        $msg.indexOf("robots") >= 0
      ) {
        setTimeout(function () {
          ChatAddEntry(
            ChatUserNames[Random(0, ChatUserNames["length"] - 1)],
            '<span class="mention">@ ' +
              ChatUserName +
              " &nbsp;</span>" +
              ChatAntiBot[rng(0, ChatAntiBot["length"] - 1)]
          );
        }, rng(7250, 9300));
      }
      if (!ChatReplied) {
        setTimeout(function () {
          ChatAddEntry(
            ChatUserNames[Random(0, ChatUserNames["length"] - 1)],
            '<span class="mention">@ ' +
              ChatUserName +
              " &nbsp;</span>  lol stop spamming and just use the followers generator"
          );

          setTimeout(function () {
            ChatAddEntry(
              ChatUserNames[Random(0, ChatUserNames["length"] - 1)],
              '<span class="mention">@ ' +
                ChatUserName +
                " &nbsp;</span>  is this your first time here? this is like the only legit Instagram followers generator on the web"
            );
            setTimeout(function () {
              ChatAddEntry(
                ChatUserNames[Random(0, ChatUserNames["length"] - 1)],
                "guys dont listen to " +
                  '<span class="mention">@ ' +
                  ChatUserName +
                  " &nbsp;</span> " +
                  " he just wants all the followers for himself haha"
              );
            }, rng(11500, 19500));
          }, rng(6500, 8500));
        }, rng(6000, 9500));
        ChatReplied = true;
      }
    }
  });
  $("#live-chat-name-confirm-button")["click"](function () {
    ChatUserName = $("#live-chat-name")["val"]();
    $("#live-chat-name-wrapper")["fadeOut"](250, function () {
      $(".live-chat-overlay").fadeOut(200, function () {
        $("#live-chat-button")["click"]();
      });
    });
  });
});

Date.prototype.getFullMinutes = function () {
  if (this.getMinutes() < 10) {
    return "0" + this.getMinutes();
  }
  return this.getMinutes();
};

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
$(function () {
  $("#livechatInputComment").focus(function () {
    $("#livechatContainerAdditional").slideDown(500);
  });
});

function Random(_0xaa63x2, _0xaa63x3) {
  return Math["floor"](Math["random"]() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
}

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
  if (_0xaa63x5 == "" || _0xaa63x6 == "") {
    return;
  }
  $(
    '<div class="livechatChatEntry"><span class="live-chat-content-username">[' +
      ChatDate.getHours() +
      ":" +
      ChatDate.getFullMinutes() +
      "]  " +
      _0xaa63x5 +
      ':</span><span class="livechatEntryContent">' +
      _0xaa63x6 +
      "</span></div>"
  )
    ["appendTo"]("#live-chat-content")
    ["hide"](0)
    ["fadeIn"](250);
  $("#live-chat-content")["scrollTop"](
    $("#live-chat-content")[0]["scrollHeight"]
  );
}

function ChatLog(_0xaa63x6) {
  $(
    '<div class="livechatChatEntry"><span class="live-chat-intro-message">' +
      _0xaa63x6 +
      "</span></div>"
  )
    ["appendTo"]("#live-chat-content")
    ["hide"](0)
    ["fadeIn"](250);
  $("#live-chat-content")["scrollTop"](
    $("#live-chat-content")[0]["scrollHeight"]
  );
}

function ChatStart() {
  var _0xaa63x8 = function () {
    setTimeout(function () {
      var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames["length"] - 1)];
      var _0xaa63xa = ChatContent[Random(0, ChatContent["length"] - 1)];
      ChatAddEntry(_0xaa63x9, _0xaa63xa);
      _0xaa63x8();
    }, Random(1000, 15000));
  };
  _0xaa63x8();
}
