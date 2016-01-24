<div class="powered-by">

  {% set current = date(Date.now(), "YYYY") %}

  &copy; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  <span itemprop="copyrightYear">{{ current }}</span>

{{ __('footer.powered', config.author) }}

{{ __('adjunct.with', '<span><i class="fa fa-coffee"></i></span>')}}
{{ __('symbol.comma')}}
<i class="icon-next-heart fa fa-heart"></i>

{{ __('adjunct.and', '<a class="theme-link" href="http://hexo.io">Hexo</a>')}}

</div>

<div class="theme-info">
  {{ __('footer.theme') }} -
  <a class="theme-link" href="https://github.com/JohnLatties/nextjohn">
    {{ theme.scheme }}
  </a>
</div>

{% block footer %}{% endblock %}
