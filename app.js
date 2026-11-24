const $ = (s) => document.querySelector(s);
const STORAGE = 'irmandade_static_data_v1';
const readData = () => { try { return JSON.parse(localStorage.getItem(STORAGE) || '{"complaints":[]}'); } catch { return { complaints: [] }; } };
const saveData = (data) => localStorage.setItem(STORAGE, JSON.stringify(data));
function toast(message) { const el = $('#toast'); if (!el) return; el.textContent = message; el.style.display = 'block'; setTimeout(() => el.style.display = 'none', 3500); }
function openLogin() {
  alert('A área interna precisa de um servidor e banco de dados. Esta versão é somente HTML, CSS e JavaScript estáticos.');
}
function trackPublic() {
  const id = $('#trackId').value.trim().replace(/^#/, '');
  if (!id) return toast('Informe o número do pedido.');
  const data = readData();
  const order = (data.orders || []).find(item => String(item.id) === id);
  $('#publicTrack').textContent = order ? `Pedido #${order.id}: ${order.status}` : 'Nenhuma atualização local encontrada. O rastreamento real exige conexão com o sistema online.';
}
$('#complaintForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const item = Object.fromEntries(new FormData(form));
  item.id = Date.now();
  item.createdAt = new Date().toISOString();
  const data = readData();
  data.complaints.push(item);
  saveData(data);
  $('#complaintMsg').textContent = 'Relato salvo neste dispositivo. Atenção: ele não foi enviado à equipe, pois esta versão não possui servidor.';
  form.reset();
});
$('#year').textContent = new Date().getFullYear();
