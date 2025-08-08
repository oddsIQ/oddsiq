function goAffiliate(){ window.open("https://wlhollywoodbets.adsrv.eacdn.com/C.ashx?btag=a_9299b_5902c_&affid=654707&siteid=9299&adid=5902&c=", "_blank"); }

function addMatchRow(wrapperId,max=10){
  const wrap = document.getElementById(wrapperId);
  const blocks = wrap.querySelectorAll('.row').length;
  if(blocks>=max){ alert('Demo limit reached ('+max+').'); return; }
  const row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = `
    <div>
      <label>Match</label>
      <input placeholder="Team A vs Team B">
    </div>
    <div>
      <label>Pick</label>
      <select>
        <option>HOME</option>
        <option>DRAW</option>
        <option>AWAY</option>
      </select>
    </div>`;
  wrap.appendChild(row);
}

function demoPredict(wrapperId, outId){
  const wrap = document.getElementById(wrapperId);
  const rows = wrap.querySelectorAll('.row');
  if(rows.length===0){ alert('Add at least one match'); return; }
  let html = '<ol>';
  rows.forEach((r,i)=>{
    const m = r.querySelector('input').value || ('Match '+(i+1));
    const pick = r.querySelector('select').value;
    const conf = Math.floor(Math.random()*21+70);
    html += `<li><strong>${m}</strong> → ${pick} <span class="small">(conf: ${conf}%)</span></li>`;
  });
  html += '</ol>';
  document.getElementById(outId).innerHTML = html;
}