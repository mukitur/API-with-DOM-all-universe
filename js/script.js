const loadTools = async (isShowAll) => {
  const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
  const data = await res.json();
  displayTools(data.data.tools, isShowAll);
};

const displayTools = (tools, isShowAll) => {
  //   console.log(tools);
  const toolsContainer = document.getElementById('tools-container');
  //   Clear tools Container
  toolsContainer.textContent = '';

  const showAllBtn = document.getElementById('show-all-btn');
  //   console.log(showAllBtn);
  if (tools.length > 3 && !isShowAll) {
    showAllBtn.classList.remove('hidden');
  } else {
    showAllBtn.classList.add('hidden');
  }
  //   Show first 3 products if product was more than 3
  if (!isShowAll) {
    tools = tools.slice(0, 3);
  }
  tools.forEach((tool) => {
    const div = document.createElement('div');
    div.classList = 'card bg-base-100 border shadow-xl';
    div.innerHTML = `
    <figure>
              <img
                src="${tool?.image ? tool.image : 'No Image found'}"
                alt=""
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Features</h2>
              <ul class="my-6">
                <li>1. ${tool.features[0]}</li>
                <li>2. ${tool.features[1]}</li>
                <li>3. ${tool.features[2]}</li>
              </ul>
              <hr />
              <h3 class="mt-5">${tool.name}</h3>
              <p class="font-light">${tool.published_in}</p>
              <div>
                <button class="btn btn-error bg-red-500">details</button>
              </div>
            </div>
    `;
    toolsContainer.appendChild(div);
  });
};

// Handle  show all tools

const handleShowAll = () => {
  //   console.log('clicked');
  loadTools(true);
};
loadTools();
