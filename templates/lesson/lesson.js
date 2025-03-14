//
/**
 * @param {HTMLElement} block The header block element
 */
export default async function decorate(block) {
  const sidebar = block.querySelector('.sidebar');
  const div = document.createElement('div');
  const content = document.createElement('div');
  content.classList.add('content');
  div.append(content);

  [...sidebar.children].forEach((row) => {
    content.append(row);
  });

  const ul = document.createElement('ul');
  [...content.querySelectorAll('h3, h2')].forEach((section) => {
    const li = document.createElement('li');
    if (section.nodeName === 'H2') li.innerHTML = `<a href='#${section.getAttribute('id')}'>${section.textContent}</a>`;
    else li.innerHTML = `<span class='sub-item'><a href='#${section.getAttribute('id')}'>${section.textContent}</a></span>`;
    ul.append(li);
  });

  const env = sessionStorage.getItem('env');
  const envObj = JSON.parse(env);

  const bar = document.createElement('div');
  bar.classList.add('navigation');
  bar.innerHTML = '<strong>Sections</strong>';
  bar.append(ul);

  if (envObj) {
    bar.innerHTML += '<strong>Quick Links</strong>';
    const quickUl = document.createElement('ul');
    const aemUrl = document.createElement('li');
    aemUrl.innerHTML = `<a href=${envObj['AEM URL']} target='_blank'>Author Environment</a>`;
    const aemDomain = envObj['AEM URL'].replace('https://', '');
    const aemUe = `${envObj['AEM URL']}/ui#/@aemxscsandbox5/aem/universal-editor/canvas/${aemDomain}/content/citisignal/us/en/rural-coverage.html`
    const ueUrl = document.createElement('li');
    ueUrl.innerHTML = `<a href=${aemUe} target='_blank'>Rural Coverage Page</a>`;
    quickUl.append(aemUrl);
    quickUl.append(ueUrl);
    bar.append(quickUl);

    bar.innerHTML += '<strong>Reference Values</strong>';
    const refUl = document.createElement('ul');

    refUl.innerHTML = `<li><strong>Email:</strong>${envObj.User}</strong>`;
    refUl.innerHTML += '<li><strong>Password:</strong> Adobe4Summit!</li>';
    bar.append(refUl);
  }
  div.append(bar);
  sidebar.append(div);
}
