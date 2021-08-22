$('#getData').click(function (e) { 
    e.preventDefault();

    $('.tag-editor').empty();
    $('#copyBtn').css('opacity', '0')
    
    const tags = $('#tags').val()

    fetch(`http://localhost:5000/tags/${tags}`,{
        method: 'POST'
    })
    .then((data)=>data.json())
    .then((data)=>{
        $('#dataBox').tagEditor({
            initialTags: data.tags,
            delimiter: ', ', /* space and comma */
            placeholder: 'Enter tags ...'
        });
        $('#copyBtn').css('opacity', '1')

        //copy to clipboard
        $("#copyBtn").click(function (e) { 
            e.preventDefault();
            navigator.clipboard.writeText(data.tags);
            setTimeout(()=>{
                alert('Text Copied')
            },500)
        });

    })
    .catch((err)=>console.log(err))

    $('#tags').val('')
})

