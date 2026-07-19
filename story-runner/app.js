"use strict";

const byId = (id) => document.getElementById(id);
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const chance = (probability) => Math.random() < probability;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const uniqueId = (prefix) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

const DATA = {
  worldPrefixes: ["玻璃", "逆潮", "靜火", "白霧", "長夜", "斷鐘", "青銅", "無月", "雨眠", "星塵", "空港", "迴聲"],
  worldSuffixes: ["城", "群島", "列車", "邊境", "檔案館", "航線", "庭院", "地下河", "自治區", "觀測站", "劇院", "第七码頭"],
  moods: ["潮濕而寧靜，所有秘密都比腳步慢半拍。", "天空總在錯誤的時間入夜，居民因此學會用聲音辨認彼此。", "記憶可以被買賣，但沒有人知道最初的價格。", "每逢整點，遠處就會有一扇不存在的門被關上。", "物件偶爾記得前任主人的夢，並在無人時低聲複述。", "道路會在雨後交換位置，只有迷路的人能抵達正確的地方。"],
  surnames: ["林", "沈", "周", "江", "白", "葉", "許", "顧", "蘇", "季", "黎", "夏", "余", "唐", "程", "溫"],
  givenNames: ["知夏", "望川", "以辰", "若棠", "遠青", "靜禾", "時雨", "洛安", "明澈", "南星", "言初", "未央", "昭野", "映真", "冬嵐", "予光", "折月", "聞舟"],
  roles: ["失物保管員", "夜班列車長", "記憶修復師", "無照氣象員", "舊書店代理人", "鐘塔維修工", "河道測量員", "夢境翻譯員", "地下郵差", "聲音採集師", "臨時偵探", "封鎖區園丁", "檔案燒錄員", "劇院燈光師"],
  traits: ["說話前總會先看向門口", "從不使用完整的姓名", "能記住每一場雨的氣味", "害怕沒有影子的房間", "習慣替陌生人保守秘密", "相信物品比人更誠實", "總把真正的目的藏在玩笑裡", "會在緊張時倒著數秒", "拒絕談論三年前的冬天", "看得懂被塗掉的字"],
  goals: ["找回一段被自己出售的記憶", "證明某個已死之人仍在寄信", "離開每天重複的同一條街", "把一件危險物品送回原主人手中", "阻止午夜列車抵達不存在的終點", "找到城市地圖上被挖去的一角", "查明自己的名字為何出現在百年前的名冊", "讓一個沒有人記得的村莊重新出現"],
  secrets: ["其實已經見過明天發生的事故", "口袋裡藏著另一個人的身分證", "每晚醒來都會少掉一小段童年", "知道鐘聲真正是在倒數什麼", "曾親手刪除一份關於自己的檔案", "能聽見某件物品對持有者說謊", "並非第一次活過今天", "與失蹤事件中的影子有相同指紋"],
  locations: ["沒有出口的月台", "被海水淹到二樓的圖書館", "凌晨三點才營業的舊書店", "城市最末端的白色鐘塔", "停電後仍亮著的劇院", "只收沒有地址信件的郵局", "每天縮短一公尺的長橋", "地下第七码頭", "廢棄氣象觀測站", "鏡子比窗戶多的旅館", "不存在於地圖上的安靜巷", "河流下方的候車室"],
  weather: ["細雨把街燈拉成金色長線", "無風的霧貼著地面移動", "天空落下極薄的灰", "遠方有雷聲，卻沒有任何雲", "冷風帶著潮濕紙張的味道", "陽光像從水底照上來"],
  itemAdjectives: ["生鏽的", "沒有指針的", "會發熱的", "寫滿陌生字跡的", "被鹽封住的", "只在黑暗中透明的", "比昨天更重的", "無法拍照的", "沾著紅土的", "持續倒數的"],
  itemNouns: ["懷錶", "錄音帶", "車票", "玻璃鑰匙", "黑色雨傘", "信封", "底片", "航海圖", "銀色鈴鐺", "房間號牌", "空藥瓶", "戲票", "舊名冊", "指南針"],
  itemOrigins: ["來自一場沒有留下紀錄的火災", "由一名失蹤者在前一天寄出", "從封閉二十年的房間裡被找到", "每次轉手都會改變上面的日期", "與城市最古老的謠言有關", "曾出現在三個互不相識者的夢裡", "被登記為不存在的證物", "看似普通，卻總能回到原處"],
  eventNames: ["午夜鐘聲", "空白信件", "消失的乘客", "錯置的明天", "逆流的雨", "無名者登記", "第二個影子", "封閉月台的廣播", "被刪除的房間", "重複的葬禮"],
  eventActions: ["所有人的手機同時收到一則來自明天的未接來電", "廣播念出一個現場沒有人承認屬於自己的名字", "一扇封死多年的門從裡面被敲了三次", "監視畫面裡多出一名從未進入現場的人", "整條街的時鐘一起慢了七分鐘", "一封沒有字的信在靠近火光時浮出句子", "地圖上的一條路突然指向眾人正在站立的位置", "某人的影子先一步轉身離開", "一件遺失多年的物品出現在仍上鎖的抽屜裡", "雨水沿著屋簷向天空流去"],
  consequences: ["這讓原本互不相干的線索第一次指向同一個地方", "沒有人立刻說破，但其中一人顯然認出了那個徵兆", "從這一刻起，所有人的證詞都開始出現同一處空白", "現場留下了不應該屬於這個年代的痕跡", "唯一的目擊者選擇撒謊，理由暫時不明", "那件事看似結束，卻在另一個人的記憶裡重新開始", "一項被遺忘的約定因此重新生效", "城市的某個角落像是聽見了召喚，短暫亮起燈光"],
  dialogueOpeners: ["你也聽見了，對吧？", "這東西不是第一次找到我。", "別相信上面的日期。", "我知道你會來，只是不知道是哪一天。", "我們見過，只是那次你用了別人的名字。", "從現在開始，不要回頭確認影子。"],
  sensory: ["空氣裡有潮木與鐵鏽的氣味", "遠處傳來玻璃杯輕碰桌面的聲音", "燈光忽明忽暗，像某種緩慢的呼吸", "地面微微震動，彷彿下方有列車經過", "牆內傳來紙張被一頁頁翻動的聲音", "寒意只停留在右手指尖"],
  firstPersonOpeners: ["我第一次注意到這件事，是在所有人都說什麼也沒發生的那天。", "我一直沒有告訴任何人：那個名字其實屬於我。", "他們以為我是偶然來到這裡，但我已經排練過這一刻很多次。", "我記得那場雨，因為它把別人的回憶沖進了我的腦中。", "我沒有勇氣承認，我真正害怕的不是死亡，而是再次想起來。"],
  firstPersonChoices: ["把真相交給最不可信的人", "獨自前往線索指向的地方", "說出一直隱藏的名字", "打開那件物品真正的用途", "假裝什麼都不知道，觀察下一個背叛者", "改變一件已經發生過的事"],
};

const els = {
  startButton: byId("startButton"), stopButton: byId("stopButton"), newWorldButton: byId("newWorldButton"), speedSelect: byId("speedSelect"),
  statusDot: byId("statusDot"), statusText: byId("statusText"), storyTitle: byId("storyTitle"), storyStream: byId("storyStream"),
  fragmentCount: byId("fragmentCount"), nextPulse: byId("nextPulse"), scrollLatestButton: byId("scrollLatestButton"), worldName: byId("worldName"),
  worldMood: byId("worldMood"), characterCount: byId("characterCount"), itemCount: byId("itemCount"), threadCount: byId("threadCount"),
  doorCount: byId("doorCount"), storyDoors: byId("storyDoors"), memoryList: byId("memoryList"), modal: byId("perspectiveModal"),
  perspectiveKicker: byId("perspectiveKicker"), perspectiveTitle: byId("perspectiveTitle"), perspectiveBody: byId("perspectiveBody"),
  continuePerspectiveButton: byId("continuePerspectiveButton"), template: byId("storyEntryTemplate"),
};

const MAX_VISIBLE_ENTRIES = 160;
const MAX_SAVED_ENTRIES = 90;
const STORAGE_KEY = "endless-story-runner-v1";
let state = createEmptyState();
let timer = null;
let countdownTimer = null;
let secondsUntilNext = 0;
let activeDoorId = null;

function createEmptyState() {
  return { version: 1, running: false, world: null, characters: [], items: [], threads: [], entries: [], doors: [], fragmentCount: 0, focusedThreadId: null };
}

function createWorld() {
  return { name: `${pick(DATA.worldPrefixes)}${pick(DATA.worldSuffixes)}`, mood: pick(DATA.moods), createdAt: Date.now(), dominantLocation: pick(DATA.locations) };
}

function createCharacter() {
  let name = `${pick(DATA.surnames)}${pick(DATA.givenNames)}`;
  let guard = 0;
  while (state.characters.some((character) => character.name === name) && guard < 12) { name = `${pick(DATA.surnames)}${pick(DATA.givenNames)}`; guard += 1; }
  return { id: uniqueId("character"), name, role: pick(DATA.roles), trait: pick(DATA.traits), goal: pick(DATA.goals), secret: pick(DATA.secrets), mentions: 0, connections: [], lastSeen: state.fragmentCount };
}

function createItem() {
  let name = `${pick(DATA.itemAdjectives)}${pick(DATA.itemNouns)}`;
  let guard = 0;
  while (state.items.some((item) => item.name === name) && guard < 12) { name = `${pick(DATA.itemAdjectives)}${pick(DATA.itemNouns)}`; guard += 1; }
  return { id: uniqueId("item"), name, origin: pick(DATA.itemOrigins), mentions: 0, linkedCharacterIds: [], lastSeen: state.fragmentCount };
}

function createThread(character, item) {
  let title = pick(DATA.eventNames);
  let guard = 0;
  while (state.threads.some((thread) => thread.title === title) && guard < 12) { title = pick(DATA.eventNames); guard += 1; }
  return { id: uniqueId("thread"), title, motif: pick(DATA.eventActions), mentions: 0, heat: 1, linkedCharacterIds: character ? [character.id] : [], linkedItemIds: item ? [item.id] : [], lastSeen: state.fragmentCount };
}

function ensureWorldPopulation() {
  if (!state.world) state.world = createWorld();
  if (state.characters.length === 0) state.characters.push(createCharacter());
  if (state.items.length === 0) state.items.push(createItem());
  if (state.threads.length === 0) state.threads.push(createThread(state.characters[0], state.items[0]));
}

function weightedPick(list, getWeight) {
  const total = list.reduce((sum, entry) => sum + getWeight(entry), 0);
  let cursor = Math.random() * total;
  for (const entry of list) { cursor -= getWeight(entry); if (cursor <= 0) return entry; }
  return list[list.length - 1];
}

function chooseCharacter({ preferExisting = true } = {}) {
  const shouldCreate = !preferExisting || state.characters.length < 2 || (state.characters.length < 10 && chance(0.22));
  if (shouldCreate) { const character = createCharacter(); state.characters.push(character); return { character, isNew: true }; }
  return { character: weightedPick(state.characters, (entry) => 1 + entry.mentions * 0.34), isNew: false };
}

function chooseItem({ preferExisting = true } = {}) {
  const shouldCreate = !preferExisting || state.items.length < 2 || (state.items.length < 12 && chance(0.2));
  if (shouldCreate) { const item = createItem(); state.items.push(item); return { item, isNew: true }; }
  return { item: weightedPick(state.items, (entry) => 1 + entry.mentions * 0.28), isNew: false };
}

function chooseThread(character, item) {
  const shouldCreate = state.threads.length < 2 || (state.threads.length < 9 && chance(0.18));
  if (shouldCreate) { const thread = createThread(character, item); state.threads.push(thread); return { thread, isNew: true }; }
  const focused = state.focusedThreadId && state.threads.find((thread) => thread.id === state.focusedThreadId);
  if (focused && chance(0.68)) return { thread: focused, isNew: false };
  return { thread: weightedPick(state.threads, (entry) => 1 + entry.heat * 0.8 + entry.mentions * 0.3), isNew: false };
}

function addUnique(array, value) { if (!array.includes(value)) array.push(value); }

function linkElements(character, item, thread) {
  addUnique(character.connections, item.id); addUnique(character.connections, thread.id); addUnique(item.linkedCharacterIds, character.id);
  addUnique(thread.linkedCharacterIds, character.id); addUnique(thread.linkedItemIds, item.id);
  character.mentions += 1; item.mentions += 1; thread.mentions += 1; thread.heat = clamp(thread.heat + (chance(0.38) ? 2 : 1), 1, 12);
  character.lastSeen = state.fragmentCount; item.lastSeen = state.fragmentCount; thread.lastSeen = state.fragmentCount;
}

function generateFragment({ forcedThreadId = null, forcedCharacterId = null } = {}) {
  ensureWorldPopulation();
  state.fragmentCount += 1;
  const forcedCharacter = forcedCharacterId && state.characters.find((entry) => entry.id === forcedCharacterId);
  const characterChoice = forcedCharacter ? { character: forcedCharacter, isNew: false } : chooseCharacter();
  const itemChoice = chooseItem({ preferExisting: !characterChoice.isNew });
  let threadChoice;
  if (forcedThreadId) {
    const forcedThread = state.threads.find((entry) => entry.id === forcedThreadId);
    threadChoice = forcedThread ? { thread: forcedThread, isNew: false } : chooseThread(characterChoice.character, itemChoice.item);
  } else threadChoice = chooseThread(characterChoice.character, itemChoice.item);

  const character = characterChoice.character;
  const item = itemChoice.item;
  const thread = threadChoice.thread;
  linkElements(character, item, thread);
  const secondary = state.characters.length > 1 && chance(0.38) ? pick(state.characters.filter((entry) => entry.id !== character.id)) : null;
  if (secondary) {
    secondary.mentions += 1; secondary.lastSeen = state.fragmentCount; addUnique(secondary.connections, character.id); addUnique(character.connections, secondary.id); addUnique(thread.linkedCharacterIds, secondary.id);
  }

  const context = { character, item, thread, secondary, isNewCharacter: characterChoice.isNew, isNewItem: itemChoice.isNew, isNewThread: threadChoice.isNew,
    location: chance(0.28) ? pick(DATA.locations) : state.world.dominantLocation, weather: pick(DATA.weather), sensory: pick(DATA.sensory), action: pick(DATA.eventActions), consequence: pick(DATA.consequences) };
  const entry = { id: uniqueId("entry"), index: state.fragmentCount, timestamp: Date.now(), text: composeNarrative(context),
    characterIds: secondary ? [character.id, secondary.id] : [character.id], itemIds: [item.id], threadIds: [thread.id] };
  state.entries.push(entry);
  if (state.entries.length > MAX_SAVED_ENTRIES) state.entries.shift();
  state.focusedThreadId = forcedThreadId || (thread.heat >= 5 && chance(0.5) ? thread.id : null);
  discoverStoryDoors(context); renderEntry(entry); renderAllPanels(); saveState(); scheduleNext();
}

function composeNarrative(ctx) {
  const { character, item, thread, secondary, isNewCharacter, isNewItem, isNewThread, location, weather, sensory, action, consequence } = ctx;
  const opening = isNewCharacter
    ? `${weather}。${character.name}第一次出現在${location}時，旁人只知道這名${character.role}${character.trait}。`
    : `${character.name}再次回到${location}，${weather}。這次，${character.role}沒有假裝只是路過。`;
  const eventLine = isNewThread ? `後來被稱為「${thread.title}」的事件，就從這一刻開始：${thread.motif}。` : `「${thread.title}」又發生了。${action}。`;
  const itemLine = isNewItem ? `${character.name}在現場發現${item.name}；它${item.origin}，卻像早就知道自己會被誰撿起。` : `那件${item.name}竟再次出現。${character.name}握住它時，${sensory}。`;
  const middle = secondary ? `${secondary.name}比任何人更早認出這個徵兆，只低聲說：「${pick(DATA.dialogueOpeners)}」` : `${character.name}想起自己的目標——${character.goal}——並突然明白，這並不是偶然。`;
  const endings = [
    `${consequence}。而${character.name}沒有告訴任何人：${character.secret}。`,
    `${consequence}。離開前，${character.name}把${item.name}藏在只有自己知道的位置，卻沒發現有人已經先在那裡留下記號。`,
    `${consequence}。當眾人散去，${item.name}裡傳出一句極輕的話，正好叫出了${character.name}的全名。`,
    `${consequence}。${character.name}決定繼續追查，但第一步不是尋找答案，而是找出誰正在改寫問題。`
  ];
  return `${opening} ${eventLine} ${itemLine} ${middle} ${pick(endings)}`;
}

function discoverStoryDoors({ character, item, thread }) {
  const candidates = [];
  if (character.mentions >= 3 && character.connections.length >= 2) candidates.push({ key: `character:${character.id}`, type: "character", targetId: character.id, characterId: character.id, threadId: thread.id, title: `進入 ${character.name} 的視角`, subtitle: `${character.role}｜一個尚未說出口的祕密` });
  if (item.mentions >= 3 && item.linkedCharacterIds.length >= 1) {
    const linkedCharacterId = pick(item.linkedCharacterIds);
    const linkedCharacter = state.characters.find((entry) => entry.id === linkedCharacterId) || character;
    candidates.push({ key: `item:${item.id}:${linkedCharacter.id}`, type: "item", targetId: item.id, characterId: linkedCharacter.id, threadId: thread.id, title: `由 ${linkedCharacter.name} 追查「${item.name}」`, subtitle: "物品再次出現，已形成可追蹤的故事線" });
  }
  if (thread.mentions >= 3 && thread.linkedCharacterIds.length >= 1) {
    const linkedCharacterId = pick(thread.linkedCharacterIds);
    const linkedCharacter = state.characters.find((entry) => entry.id === linkedCharacterId) || character;
    candidates.push({ key: `thread:${thread.id}:${linkedCharacter.id}`, type: "thread", targetId: thread.id, characterId: linkedCharacter.id, threadId: thread.id, title: `以 ${linkedCharacter.name} 視角重返「${thread.title}」`, subtitle: `事件已重複 ${thread.mentions} 次，背後可能存在共同原因` });
  }
  for (const candidate of candidates) {
    if (!state.doors.some((door) => door.key === candidate.key)) state.doors.unshift({ ...candidate, id: uniqueId("door"), createdAt: Date.now(), visits: 0 });
  }
  state.doors = state.doors.slice(0, 12);
}

function renderEntry(entry, { skipAnimation = false } = {}) {
  const fragment = els.template.content.cloneNode(true);
  const article = fragment.querySelector("article");
  if (skipAnimation) article.style.animation = "none";
  article.dataset.entryId = entry.id;
  fragment.querySelector(".entry-meta span").textContent = `片段 ${String(entry.index).padStart(3, "0")}`;
  fragment.querySelector(".entry-meta time").textContent = new Date(entry.timestamp).toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  fragment.querySelector("p").textContent = entry.text;
  const tags = fragment.querySelector(".entry-tags");
  const tagData = [
    ...entry.characterIds.map((id) => ({ type: "character", value: state.characters.find((entry) => entry.id === id)?.name })),
    ...entry.itemIds.map((id) => ({ type: "item", value: state.items.find((entry) => entry.id === id)?.name })),
    ...entry.threadIds.map((id) => ({ type: "thread", value: state.threads.find((entry) => entry.id === id)?.title }))
  ].filter((tag) => tag.value);
  for (const tag of tagData) { const span = document.createElement("span"); span.className = `entry-tag ${tag.type}`; span.textContent = tag.value; tags.appendChild(span); }
  els.storyStream.appendChild(fragment);
  while (els.storyStream.querySelectorAll(".story-entry:not(.prologue)").length > MAX_VISIBLE_ENTRIES) els.storyStream.querySelector(".story-entry:not(.prologue)")?.remove();
  if (isNearBottom(els.storyStream) || state.running) requestAnimationFrame(() => { els.storyStream.scrollTop = els.storyStream.scrollHeight; });
}

function renderAllPanels() {
  const world = state.world;
  els.worldName.textContent = world?.name || "未命名世界"; els.worldMood.textContent = world?.mood || "時間還沒有開始流動。";
  els.storyTitle.textContent = world ? `${world.name}：正在發生的事` : "世界正在等待第一個念頭";
  els.fragmentCount.textContent = String(state.fragmentCount); els.characterCount.textContent = String(state.characters.length); els.itemCount.textContent = String(state.items.length);
  els.threadCount.textContent = String(state.threads.length); els.doorCount.textContent = String(state.doors.length);
  renderDoors(); renderMemory(); renderRunningState();
}

function renderDoors() {
  els.storyDoors.replaceChildren();
  if (state.doors.length === 0) { const empty = document.createElement("div"); empty.className = "empty-state"; empty.textContent = "尚未形成足夠強烈的故事線。"; els.storyDoors.appendChild(empty); return; }
  for (const door of state.doors) {
    const button = document.createElement("button"); button.className = "door-button"; button.type = "button"; button.dataset.doorId = door.id;
    const type = document.createElement("span"); type.className = "door-type"; type.textContent = door.type === "character" ? "CHARACTER POV" : door.type === "item" ? "OBJECT THREAD" : "EVENT THREAD";
    const title = document.createElement("strong"); title.textContent = door.title;
    const subtitle = document.createElement("span"); subtitle.textContent = door.subtitle;
    button.append(type, title, subtitle); button.addEventListener("click", () => openPerspective(door.id)); els.storyDoors.appendChild(button);
  }
}

function renderMemory() {
  const memories = [
    ...state.characters.map((entry) => ({ type: "人", name: entry.name, detail: `${entry.role}｜出現 ${entry.mentions} 次`, score: entry.mentions })),
    ...state.items.map((entry) => ({ type: "物", name: entry.name, detail: `連結 ${entry.linkedCharacterIds.length} 名人物｜出現 ${entry.mentions} 次`, score: entry.mentions })),
    ...state.threads.map((entry) => ({ type: "事", name: entry.title, detail: `熱度 ${entry.heat}｜重複 ${entry.mentions} 次`, score: entry.heat + entry.mentions }))
  ].sort((a, b) => b.score - a.score).slice(0, 8);
  els.memoryList.replaceChildren();
  if (memories.length === 0) { const empty = document.createElement("p"); empty.className = "empty-state"; empty.textContent = "新出現的重要元素會被世界記住。"; els.memoryList.appendChild(empty); return; }
  for (const memory of memories) {
    const row = document.createElement("div"); row.className = "memory-chip";
    const symbol = document.createElement("span"); symbol.className = "memory-symbol"; symbol.textContent = memory.type;
    const copy = document.createElement("div"); const name = document.createElement("strong"); name.textContent = memory.name;
    const detail = document.createElement("span"); detail.textContent = memory.detail; copy.append(name, detail); row.append(symbol, copy); els.memoryList.appendChild(row);
  }
}

function openPerspective(doorId) {
  const door = state.doors.find((entry) => entry.id === doorId); if (!door) return;
  const character = state.characters.find((entry) => entry.id === door.characterId); const thread = state.threads.find((entry) => entry.id === door.threadId);
  const item = door.type === "item" ? state.items.find((entry) => entry.id === door.targetId) : null; if (!character) return;
  activeDoorId = door.id; door.visits += 1;
  els.perspectiveKicker.textContent = door.type === "character" ? "CHARACTER — FIRST PERSON" : door.type === "item" ? "OBJECT — FIRST PERSON" : "EVENT — FIRST PERSON";
  els.perspectiveTitle.textContent = door.title; els.perspectiveBody.replaceChildren();
  for (const text of buildFirstPersonStory(character, thread, item, door)) { const paragraph = document.createElement("p"); paragraph.textContent = text; els.perspectiveBody.appendChild(paragraph); }
  els.modal.hidden = false; document.body.classList.add("modal-open"); els.continuePerspectiveButton.focus(); saveState();
}

function buildFirstPersonStory(character, thread, item, door) {
  const linkedItem = item || findLinkedItem(character, thread);
  const recentEntry = [...state.entries].reverse().find((entry) => entry.characterIds.includes(character.id));
  const opener = pick(DATA.firstPersonOpeners);
  const memory = recentEntry ? `最近一次是在第 ${recentEntry.index} 個片段裡。所有人都以為我只是${character.role}，卻不知道我${character.trait}。` : `他們只知道我是${character.role}。`;
  const objectLine = linkedItem ? `我握住${linkedItem.name}時，它把一段不屬於我的記憶塞進掌心。${linkedItem.origin}；而我現在確定，它一直在選擇自己的持有者。` : "我手裡沒有證物，只有一個反覆出現、始終沒有答案的名字。";
  const threadLine = thread ? `「${thread.title}」不是偶發事件。它已經出現 ${thread.mentions} 次，每一次都離我的祕密更近：${character.secret}。` : "我追的線索沒有名字，卻總比我早一步抵達。";
  const ending = `我真正想做的是${character.goal}。下一次世界繼續運行時，我會選擇${pick(DATA.firstPersonChoices)}。也許這會讓故事靠近真相，也可能讓所有人更深地陷進來。`;
  return door.visits > 1 ? [`我又回到這裡了。這是第 ${door.visits} 次有人透過我的眼睛看世界，而有些細節已經改變。`, objectLine, threadLine, ending] : [opener, memory, objectLine, threadLine, ending];
}

function findLinkedItem(character, thread) {
  const ids = thread?.linkedItemIds?.length ? thread.linkedItemIds : character.connections;
  return state.items.find((entry) => ids.includes(entry.id)) || null;
}

function closePerspective() { els.modal.hidden = true; document.body.classList.remove("modal-open"); activeDoorId = null; }

function continuePerspective() {
  const door = state.doors.find((entry) => entry.id === activeDoorId); if (!door) return closePerspective();
  state.focusedThreadId = door.threadId; const thread = state.threads.find((entry) => entry.id === door.threadId); if (thread) thread.heat = clamp(thread.heat + 3, 1, 12);
  closePerspective(); generateFragment({ forcedThreadId: door.threadId, forcedCharacterId: door.characterId });
}

function startEngine() {
  if (state.running) return; ensureWorldPopulation(); state.running = true; renderAllPanels();
  if (state.fragmentCount === 0) generateFragment(); else scheduleNext(450); saveState();
}

function stopEngine() { state.running = false; clearTimers(); renderRunningState(); saveState(); }

function scheduleNext(overrideDelay = null) {
  clearTimers(); if (!state.running) return;
  const delay = overrideDelay ?? Number(els.speedSelect.value); secondsUntilNext = Math.max(1, Math.ceil(delay / 1000)); updateCountdownText();
  countdownTimer = window.setInterval(() => { secondsUntilNext -= 1; updateCountdownText(); }, 1000);
  timer = window.setTimeout(() => generateFragment(), delay);
}

function clearTimers() { if (timer) window.clearTimeout(timer); if (countdownTimer) window.clearInterval(countdownTimer); timer = null; countdownTimer = null; }
function updateCountdownText() { els.nextPulse.textContent = state.running ? `下一段劇情約 ${Math.max(0, secondsUntilNext)} 秒後生成` : "引擎已停止，世界狀態仍被保留"; }
function renderRunningState() { els.startButton.disabled = state.running; els.stopButton.disabled = !state.running; els.statusDot.classList.toggle("running", state.running); els.statusText.textContent = state.running ? "故事持續生成中" : state.fragmentCount > 0 ? "故事已暫停" : "等待啟動"; if (!state.running) updateCountdownText(); }

function resetWorld() {
  const wasRunning = state.running; clearTimers(); state = createEmptyState(); state.world = createWorld();
  els.storyStream.querySelectorAll(".story-entry:not(.prologue)").forEach((entry) => entry.remove());
  const prologue = els.storyStream.querySelector(".prologue");
  if (prologue) { prologue.querySelector("time").textContent = "新世界已建立"; prologue.querySelector("p").textContent = `${state.world.name}已生成。按下「開始」，讓時間第一次向前。`; }
  state.running = wasRunning; renderAllPanels(); saveState(); if (wasRunning) generateFragment();
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, running: false })); }
  catch (error) { console.warn("無法儲存故事狀態：", error); }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return; const parsed = JSON.parse(raw); if (parsed?.version !== 1) return;
    state = { ...createEmptyState(), ...parsed, running: false };
    state.entries = Array.isArray(state.entries) ? state.entries : []; state.characters = Array.isArray(state.characters) ? state.characters : [];
    state.items = Array.isArray(state.items) ? state.items : []; state.threads = Array.isArray(state.threads) ? state.threads : []; state.doors = Array.isArray(state.doors) ? state.doors : [];
  } catch (error) { console.warn("無法讀取故事狀態：", error); state = createEmptyState(); }
}

function restoreEntries() {
  if (!state.entries.length) return; const prologue = els.storyStream.querySelector(".prologue"); if (prologue) prologue.remove();
  state.entries.forEach((entry) => renderEntry(entry, { skipAnimation: true })); requestAnimationFrame(() => { els.storyStream.scrollTop = els.storyStream.scrollHeight; });
}

function isNearBottom(element) { return element.scrollHeight - element.scrollTop - element.clientHeight < 110; }

function bindEvents() {
  els.startButton.addEventListener("click", startEngine); els.stopButton.addEventListener("click", stopEngine); els.newWorldButton.addEventListener("click", resetWorld);
  els.speedSelect.addEventListener("change", () => { if (state.running) scheduleNext(); });
  els.scrollLatestButton.addEventListener("click", () => { els.storyStream.scrollTo({ top: els.storyStream.scrollHeight, behavior: "smooth" }); });
  els.continuePerspectiveButton.addEventListener("click", continuePerspective);
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closePerspective));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !els.modal.hidden) closePerspective(); });
  window.addEventListener("beforeunload", saveState);
}

function init() { loadState(); bindEvents(); restoreEntries(); renderAllPanels(); }
init();
