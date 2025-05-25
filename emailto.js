const form = document.getElementById('emailForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = encodeURIComponent(form.name.value.trim());
    const subject = encodeURIComponent(form.subject.value.trim());
    const message = encodeURIComponent(form.message.value.trim());

    const mailtoLink = 
      `mailto:jackisaacs97@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0A${name}`;

      const width = 600;
      const height = 500;
      const left = (window.screen.width / 2) - (width / 2);
      const top = (window.screen.height / 2) - (height / 2);
    
      window.open(
        mailtoLink,
        'emailWindow',
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
      );

  });