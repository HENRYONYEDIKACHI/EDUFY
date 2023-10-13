
    let mediaPicker = document.createElement('input')
    mediaPicker.setAttribute('id', 'pick-file')
    mediaPicker.setAttribute('style', 'visibility: hidden')
    mediaPicker.setAttribute('type', 'file')
    mediaPicker.setAttribute('accept', 'images/*')
    mediaPicker.setAttribute('multiple', 'multiple')
    // let mediaArray = []
    let mediaList
    const pickFiles = () => {
        document.querySelector('.options-cover').appendChild(mediaPicker)
        mediaPicker.click()
        mediaPicker.addEventListener('change', (e)=>{
            console.log(e.target.files)
            function setupReader(xfile) {
                // console.log(xfile)
                let mediaData = {}
                let src = `data:${xfile.type};base64,`
                
                mediaData.name = xfile.name
                mediaData.type = xfile.type
                
                let mediaBox = document.createElement('div')
                mediaBox.setAttribute('class', 'media-box')
                
                let mediaIcon = document.createElement('div')
                mediaIcon.innerHTML = '&times;'
                mediaIcon.setAttribute('class', 'media-icon')
                mediaIcon.addEventListener('click', (e)=>{
                    alert('Remove image?')
                    let del_target = e.target.parentElement.parentElement.children
                    for (let item=0; item < mediaHold.current.children.length; item++) {
                        if (mediaHold.current.children[item].src === del_target) {
                            mediaHold.current.children.splice(item, 1)
                        }
                    }
                })
                
                let mediaImg = document.createElement('img')
                mediaImg.setAttribute('class', 'media-img')
                
                mediaBox.appendChild(mediaIcon)
                mediaBox.appendChild(mediaImg)
                
                let reader = new FileReader();
                reader.readAsDataURL(xfile)
                reader.onload = function(ev) {
                    mediaData.data = ev.target.result.split(',')[1]
                    src = src + mediaData.data
                    mediaImg.src = src
                }
                mediaHold.current.appendChild(mediaBox)
            }
            mediaList = Array.from(e.target.files)
            mediaList.forEach(setupReader)
            mediaList=[]
        })
        mediaPicker.addEventListener('loadeddata', (e) => {
            console.log(e.target.files)
        })
    }
    // console.log(mediaHold.current.splice(0, 1))