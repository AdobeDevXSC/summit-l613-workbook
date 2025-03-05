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
    if(section.nodeName === 'H2') li.innerHTML = `<a href='#${section.getAttribute('id')}'>${section.textContent}</a>`;
    else li.innerHTML = `<span class='sub-item'><a href='#${section.getAttribute('id')}'>${section.textContent}</a></span>`;
    ul.append(li);
  });

  const bar = document.createElement('div');
  bar.classList.add('navigation');
  bar.innerHTML = '<strong>Sections</strong>';
  bar.append(ul);
  div.append(bar);
  sidebar.append(div);
}
