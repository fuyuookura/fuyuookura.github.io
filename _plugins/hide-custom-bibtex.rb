module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
	    keywords = @context.registers[:site].config['filtered_bibtex_keywords']

      # Return input unchanged if filtered_bibtex_keywords is not configured
      return input if keywords.nil? || keywords.empty?

	    keywords.each do |keyword|
		    input = input.gsub(/^.*\b#{keyword}\b *= *\{.*$\n/, '')
	    end

      # Clean superscripts in author lists
      input = input.gsub(/^.*\bauthor\b *= *\{.*$\n/) { |line| line.gsub(/[*†‡§¶‖&^]/, '') }

      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
