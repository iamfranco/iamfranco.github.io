// update emojis
twemoji.parse(document.body, {
    folder: 'svg',
    ext: '.svg'
})

// set year
$('#year').innerHTML = new Date().getFullYear()

// toggle theme
const themeToggler = $('#themeToggle')
const body = $('body')
let isDark = false
let localStorageIsDark = eval(localStorage.getItem('isDarkTheme'))
if (localStorageIsDark !== null) isDark = localStorageIsDark
if (isDark) {
    themeToggler.innerHTML = 'Dark Mode'
    body.classList.add("dark")
}
themeToggler.addEventListener("click", function() {
    body.style.transition = "0.1s ease all"
    isDark = !isDark
    if (isDark) {
        themeToggler.innerHTML = 'Dark Mode'
        body.classList.add("dark")
    } else {
        themeToggler.innerHTML = 'Light Mode'
        body.classList.remove("dark")
    }
    localStorage.setItem('isDarkTheme', isDark.toString())
})

// check if device is tablet
const userAgent = navigator.userAgent.toLowerCase()
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)

// turn project icon into gif on hover
if (!isTablet) {
    document.querySelectorAll('.scrollList__item__icon').forEach(item => {
        item.addEventListener('mouseenter', iconToGif)
        item.addEventListener('mouseleave', gifToIcon)
    })
}

// project items section

let showCode = false
const projectFilters = document.getElementById('projectFilters')
const projectContainer = document.getElementById('projectContainer')
const showCodeBtn = document.getElementById('projectShowCodeBtn')
populateFiltersDOM(projects)
populateProjectItemsDOM(projects, {firstCall: true})

projectFilters.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('filterTag')) {
        const tag = ev.target.getAttribute('tag')
        updateFiltersActiveTag(tag) 
        if (ev.target.id == 'filterShowAll') { // show all
            populateProjectItemsDOM(projects)
        } else { // apply tag filtering
            populateProjectItemsDOM(projects, {filterTag: tag})
        }
    }
})

showCodeBtn.addEventListener('click', function() {
    showCode = !showCode
    if (showCode) showCodeBtn.classList.add('active')
    else showCodeBtn.classList.remove('active')
    updateProjectLinks()
})

if (!isTablet) {
    projectContainer.addEventListener('mouseover', function(ev) {
        const item = ev.target.closest('.projectItem')
        if (item != null) {
            iconToGif(item)
        }
    })

    projectContainer.addEventListener('mouseout', function(ev) {
        const item = ev.target.closest('.projectItem')
        if (item != null) {
            gifToIcon(item)
        }
    })
}

// scrollShow track items
scrollShow.addItems()


function $(x) {return document.querySelector(x)}

function getAllTags(projects) {
    let tags = []
    projects.forEach(item => {
        item.tags.forEach(tag => {
            if (!tags.includes(tag)) tags.push(tag)
        })
    })
    tags.sort()
    return tags
}

function populateFiltersDOM(projects) {
    const tags = getAllTags(projects)
    tags.forEach(tag => {
        projectFilters.insertAdjacentHTML('beforeend', 
            `<div class="filterTag" tag=${tag}>
                ${tag}
            </div>`
        )
    })
}

function updateFiltersActiveTag(tag) {
    projectFilters.getElementsByClassName('active')[0].classList.remove('active')
    if (tag == null) { // show all
        document.getElementById('filterShowAll').classList.add('active')
    } else { // make filter tag active
        const filterTag = projectFilters.getElementsByClassName('filterTag')
        for (let i=0; i < filterTag.length; i++) {
            const element = filterTag[i]
            if (element.getAttribute('tag') == tag) {
                element.classList.add('active')
            }
        }
    }
}

function populateProjectItemsDOM(projects, options={}) {
    const filterTag = options.filterTag || null
    const firstCall = options.firstCall || false
    let projectsFiltered = projects
    if (filterTag != null) {
        projectsFiltered = projects.filter(function(item) {
            return item.tags.includes(filterTag)
        })
    }
    const scrollShowClass = firstCall ? 'scrollShow' : ''
    const scrollShowAttr = firstCall ? 'data-scroll-show-element-percent="0"' : ''
    projectContainer.innerHTML = ''
    for (let i = 0; i < projectsFiltered.length; i++) {
        const item = projectsFiltered[i]
        let tagDOM = ''
        item.tags.forEach(tag => {
            if (tag==filterTag) tagDOM = `${tagDOM}<div class="projectTag active">${tag}</div>`
            else tagDOM = `${tagDOM}<div class="projectTag" tag=${tag}>${tag}</div>`
        })
        projectContainer.insertAdjacentHTML('beforeend',
            `
            <a href="" target="_blank" 
                class="projectLink ${scrollShowClass}" 
                ${scrollShowAttr}
                hrefdemo="${item.link}" 
                hrefcode="${item.link_code}">
                <div class="projectItem">
                    <div class="projectThumbnailContainer">
                        <img class="projectThumbnail" 
                            src="${item.thumbnail_img}" 
                            srcgif="${item.thumbnail_gif}"
                            alt="" >
                        <div class="githubLinkStamp">GitHub Code</div>
                    </div>
                    <div>
                        <div class="projectName">${item.name}</div>
                        <div class="projectTagContainer">${tagDOM}</div>
                    </div>
                </div>
            </a>
            `
        )
    }
    updateProjectLinks()
    scrollShow.onResize()
}

function updateProjectLinks() {
    const projectLink = projectContainer.getElementsByClassName('projectLink')
    const gitHubLinkStamp = projectContainer.getElementsByClassName('githubLinkStamp')
    for (let i = 0; i < projectLink.length; i++) {
        const atag = projectLink[i]
        const hrefCode = atag.getAttribute('hrefcode')
        const hrefDemo = atag.getAttribute('hrefdemo')
        let showCodeForThis = showCode
        if (hrefCode.length && !hrefDemo.length) {
            showCodeForThis = true
        } else if (!hrefCode.length && hrefDemo.length) {
            showCodeForThis = false
        }
        const href = showCodeForThis ? hrefCode : hrefDemo
        atag.href = href
        const stamp = gitHubLinkStamp[i]
        if (showCodeForThis) stamp.classList.add('active')
        else stamp.classList.remove('active')
    }
}

// turn project icon into gif on hover
function iconToGif(item) {
    const target = item.getElementsByClassName('projectThumbnail')[0]
    if (target.hasAttribute('srcgif') && target.getAttribute('srcgif').length) {
        target.setAttribute('srcicon', target.getAttribute('src'))
        target.setAttribute('src', target.getAttribute('srcgif'))
    }
}
function gifToIcon(item) {
    const target = item.getElementsByClassName('projectThumbnail')[0]
    if (target.hasAttribute('srcicon') && target.getAttribute('srcicon').length) {
        target.setAttribute('srcgif', target.getAttribute('src'))
        target.setAttribute('src', target.getAttribute('srcicon'))
    }
}
