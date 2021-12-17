import{_ as n,c as a,o as e,a as s}from"./app.57dc5434.js";const g='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"CLI","slug":"cli"},{"level":2,"title":"Document your code using annotations or PHP attributes","slug":"document-your-code-using-annotations-or-php-attributes"},{"level":3,"title":"Using variables","slug":"using-variables"},{"level":3,"title":"Annotation placement","slug":"annotation-placement"},{"level":3,"title":"Arrays and Objects","slug":"arrays-and-objects"},{"level":3,"title":"Detects values based on context","slug":"detects-values-based-on-context"},{"level":3,"title":"Shortcuts","slug":"shortcuts"},{"level":2,"title":"Reusing annotations (ref)","slug":"reusing-annotations-ref"},{"level":2,"title":"Composition","slug":"composition"},{"level":2,"title":"Array parameters in query","slug":"array-parameters-in-query"},{"level":2,"title":"Vendor extensions","slug":"vendor-extensions"},{"level":2,"title":"OpenApi","slug":"openapi"}],"relativePath":"Getting-started.md","lastUpdated":1639751129642}',t={},o=s(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>We recommend adding swagger-php to your project with <a href="https://getcomposer.org" target="_blank" rel="noopener noreferrer">Composer</a></p><div class="language-bash"><pre><code><span class="token function">composer</span> require zircote/swagger-php
</code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Generate always-up-to-date documentation.</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;vendor/autoload.php&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$openapi</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>OpenApi<span class="token punctuation">\\</span>Generator</span><span class="token operator">::</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;/path/to/project&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type: application/x-yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$openapi</span><span class="token operator">-&gt;</span><span class="token function">toYaml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre></div><p>This will scan the php-files in the given folder(s), look for OpenApi annotations and output a json file.</p><p>Complete documentation of how to use the <code>Generator</code> class can be found in the <a href="https://zircote.github.io/swagger-php/Generator-migration.html" target="_blank" rel="noopener noreferrer">Generator Migration</a> guide.</p><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-hidden="true">#</a></h2><p>Instead of generating the documentation dynamically we also provide a command line interface. This allows to write the documentation to a static yaml/json file.</p><div class="language-bash"><pre><code>./vendor/bin/openapi --help
</code></pre></div><p>For cli usage from anywhere install swagger-php globally and add the <code>~/.composer/vendor/bin</code> directory to the PATH in your environment.</p><div class="language-bash"><pre><code><span class="token function">composer</span> global require zircote/swagger-php
</code></pre></div><h2 id="document-your-code-using-annotations-or-php-attributes" tabindex="-1">Document your code using annotations or PHP attributes <a class="header-anchor" href="#document-your-code-using-annotations-or-php-attributes" aria-hidden="true">#</a></h2><p>The goal of swagger-php is to generate a openapi.json using phpdoc annotations or PHP attributes.</p><h4 id="when-you-write" tabindex="-1">When you write: <a class="header-anchor" href="#when-you-write" aria-hidden="true">#</a></h4><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Info(title=&quot;My First API&quot;, version=&quot;0.1&quot;)
 */</span>

<span class="token comment">/**
 * @OA\\Get(
 *     path=&quot;/api/resource.json&quot;,
 *     @OA\\Response(response=&quot;200&quot;, description=&quot;An example resource&quot;)
 * )
 */</span>
</code></pre></div><h4 id="swagger-php-will-generate" tabindex="-1">swagger-php will generate: <a class="header-anchor" href="#swagger-php-will-generate" aria-hidden="true">#</a></h4><div class="language-yaml"><pre><code><span class="token key atrule">openapi</span><span class="token punctuation">:</span> 3.0.0
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;My First API&quot;</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;0.1&quot;</span>
<span class="token key atrule">paths</span><span class="token punctuation">:</span>
  <span class="token key atrule">/api/resource.json</span><span class="token punctuation">:</span>
    <span class="token key atrule">get</span><span class="token punctuation">:</span>
      <span class="token key atrule">responses</span><span class="token punctuation">:</span>
        <span class="token key atrule">&quot;200&quot;</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;An example resource&quot;</span>
</code></pre></div><h4 id="php-attributes" tabindex="-1">PHP Attributes <a class="header-anchor" href="#php-attributes" aria-hidden="true">#</a></h4><p>This documentation uses annotations in its examples. However, as per PHP 8.1 you may also use all documented annotations as attributes. Then the above example would look like this:</p><div class="language-php"><pre><code><span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Info</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">title</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;My First API&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">version</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;0.1&quot;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OpenApi</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Controller</span><span class="token punctuation">{</span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Get</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">path</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;/api/resource.json&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Response</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">response</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">description</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;An example resource&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
       <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="using-variables" tabindex="-1">Using variables <a class="header-anchor" href="#using-variables" aria-hidden="true">#</a></h3><p>You can use constants inside doctrine annotations.</p><div class="language-php"><pre><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;API_HOST&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">$env</span> <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string double-quoted-string">&quot;example.com&quot;</span> <span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Server(url=API_HOST)
 */</span>
</code></pre></div><p>When you&#39;re using the CLI you&#39;ll need to include the php file with the constants using the <code>--bootstrap</code> options:</p><div class="language-bash"><pre><code>openapi --bootstrap constants.php
</code></pre></div><h3 id="annotation-placement" tabindex="-1">Annotation placement <a class="header-anchor" href="#annotation-placement" aria-hidden="true">#</a></h3><p>You shouldn&#39;t place all annotations inside one big @OA\\OpenApi() annotation block, but scatter them throughout your codebase. swagger-php will scan your project and merge all annotations into one @OA\\OpenApi annotation.</p><p>The big benefit swagger-php provides is that the documentation lives close to the code implementing the API.</p><p><strong>As of swagger-php v4 all annotations or attributes must be associated with code (class, method, parameter)</strong></p><h3 id="arrays-and-objects" tabindex="-1">Arrays and Objects <a class="header-anchor" href="#arrays-and-objects" aria-hidden="true">#</a></h3><p>Doctrine annotation supports arrays, but uses <code>{</code> and <code>}</code> instead of <code>[</code> and <code>]</code>.</p><p>Doctrine also supports objects, which also use <code>{</code> and <code>}</code> and require the property names to be surrounded with <code>&quot;</code>.</p><div class="warning custom-block"><p class="custom-block-title">DON&#39;T WRITE</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Info(
 *   title=&quot;My first API&quot;,
 *   version=&quot;1.0.0&quot;,
 *   contact={
 *     &quot;email&quot;: &quot;support@example.com&quot;
 *   }
 * )
 */</span>
</code></pre></div></div><p>This &quot;works&quot; but most objects have an annotation with the same name as the property, such as <code>@OA\\Contact</code> for <code>contact</code>:</p><div class="tip custom-block"><p class="custom-block-title">WRITE</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Info(
 *   title=&quot;My first API&quot;,
 *   version=&quot;1.0.0&quot;,
 *   @OA\\Contact(
 *     email=&quot;support@example.com&quot;
 *   )
 * )
 */</span>
</code></pre></div></div><p>This also adds validation, so when you misspell a property or forget a required property, it will trigger a PHP warning. For example, if you write <code>emial=&quot;support@example.com&quot;</code>, swagger-php would generate a notice with <code>Unexpected field &quot;emial&quot; for @OA\\Contact(), expecting &quot;name&quot;, &quot;email&quot;, ...</code></p><p>Placing multiple annotations of the same type will result in an array of objects. For objects, the key is defined by the field with the same name as the annotation: <code>response</code> in a <code>@OA\\Response</code>, <code>property</code> in a <code>@OA\\Property</code>, etc.</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Get(
 *   path=&quot;/products&quot;,
 *   summary=&quot;list products&quot;,
 *   @OA\\Response(
 *     response=200,
 *     description=&quot;A list with products&quot;
 *   ),
 *   @OA\\Response(
 *     response=&quot;default&quot;,
 *     description=&quot;an &quot;&quot;unexpected&quot;&quot; error&quot;
 *   )
 * )
 */</span>
</code></pre></div><h4 id="results-in" tabindex="-1">Results in: <a class="header-anchor" href="#results-in" aria-hidden="true">#</a></h4><div class="language-yaml"><pre><code><span class="token key atrule">openapi</span><span class="token punctuation">:</span> 3.0.0
<span class="token key atrule">paths</span><span class="token punctuation">:</span>
  <span class="token key atrule">/products</span><span class="token punctuation">:</span>
    <span class="token key atrule">get</span><span class="token punctuation">:</span>
      <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;list products&quot;</span>
      <span class="token key atrule">responses</span><span class="token punctuation">:</span>
        <span class="token key atrule">&quot;200&quot;</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;A list with products&quot;</span>
        <span class="token key atrule">default</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&#39;an &quot;unexpected&quot; error&#39;</span>
</code></pre></div><h3 id="detects-values-based-on-context" tabindex="-1">Detects values based on context <a class="header-anchor" href="#detects-values-based-on-context" aria-hidden="true">#</a></h3><p>swagger-php looks at the context of the comment which reduces duplication.</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Schema()
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Product</span> <span class="token punctuation">{</span>

    <span class="token comment">/**
     * The product name
     * @var string
     * @OA\\Property()
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="results-in-1" tabindex="-1">Results in: <a class="header-anchor" href="#results-in-1" aria-hidden="true">#</a></h4><div class="language-yaml"><pre><code><span class="token key atrule">openapi</span><span class="token punctuation">:</span> 3.0.0
<span class="token key atrule">components</span><span class="token punctuation">:</span>
  <span class="token key atrule">schemas</span><span class="token punctuation">:</span>
    <span class="token key atrule">Product</span><span class="token punctuation">:</span>
      <span class="token key atrule">properties</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;The product name&quot;</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> string
      <span class="token key atrule">type</span><span class="token punctuation">:</span> object
</code></pre></div><h4 id="as-if-you-d-written" tabindex="-1">As if you&#39;d written: <a class="header-anchor" href="#as-if-you-d-written" aria-hidden="true">#</a></h4><div class="language-php"><pre><code>    <span class="token comment">/**
     * The product name
     * @var string
     *
     * @OA\\Property(
     *   property=&quot;name&quot;,
     *   type=&quot;string&quot;,
     *   description=&quot;The product name&quot;
     * )
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="shortcuts" tabindex="-1">Shortcuts <a class="header-anchor" href="#shortcuts" aria-hidden="true">#</a></h3><h4 id="anotation-namespace" tabindex="-1">Anotation namespace <a class="header-anchor" href="#anotation-namespace" aria-hidden="true">#</a></h4><p>Instead of writing the <abbr title="Full Qualified Class Name">FQCN</abbr>: <code>@OpenApi\\Annotations\\Response()</code> you can write the shorter <code>@OA\\Response()</code> instead.</p><p>This works because doctrine picks up on the use statements like:</p><div class="language-php"><pre><code><span class="token keyword">use</span> <span class="token package">OpenApi<span class="token punctuation">\\</span>Annotations</span> <span class="token keyword">as</span> <span class="token constant">OA</span><span class="token punctuation">;</span>
</code></pre></div><p>And swagger-php injects this namespace alias, even when it&#39;s not in the php file.<br> But if your editor supports doctrine annotation completion, you still need to add the namespace alias otherwise it can&#39;t find the annotation classes for autocompletion.</p><h4 id="json-or-xml" tabindex="-1">Json or Xml <a class="header-anchor" href="#json-or-xml" aria-hidden="true">#</a></h4><p>The <code>@OA\\MediaType</code> is used to describe the content:</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Response(
 *     response=200,
 *     description=&quot;successful operation&quot;,
 *     @OA\\MediaType(
 *         mediaType=&quot;application/json&quot;,
 *         @OA\\Schema(ref=&quot;#/components/schemas/User&quot;),
 *     )
 * ),
 */</span>
</code></pre></div><p>But because most API requests and responses are JSON, the <code>@OA\\JsonContent</code> allows you to write:</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Response(
 *     response=200,
 *     description=&quot;successful operation&quot;,
 *     @OA\\JsonContent(ref=&quot;#/components/schemas/User&quot;),
 * )
 */</span>
</code></pre></div><p>During processing the <code>@OA\\JsonContent</code> unfolds to <code>@OA\\MediaType( mediaType=&quot;application/json&quot;, @OA\\Schema(</code> and will generate the same output.</p><p>On a similar note, you generally don&#39;t have to write a <code>@OA\\PathItem</code> because this annotation will be generated based on the path in operation <code>@OA\\Get</code>, <code>@OA\\Post</code>, etc.</p><h2 id="reusing-annotations-ref" tabindex="-1">Reusing annotations (ref) <a class="header-anchor" href="#reusing-annotations-ref" aria-hidden="true">#</a></h2><p>It&#39;s common that multiple requests have some overlap in either the request or the response. To keep things DRY (Don&#39;t Repeat Yourself) the specification includes referencing other parts of the JSON using <code>$ref</code>s</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Schema(
 *   schema=&quot;product_id&quot;,
 *   type=&quot;integer&quot;,
 *   format=&quot;int64&quot;,
 *   description=&quot;The unique identifier of a product in our catalog&quot;
 * )
 */</span>
</code></pre></div><h4 id="results-in-2" tabindex="-1">Results in: <a class="header-anchor" href="#results-in-2" aria-hidden="true">#</a></h4><div class="language-yaml"><pre><code><span class="token key atrule">openapi</span><span class="token punctuation">:</span> 3.0.0
<span class="token key atrule">components</span><span class="token punctuation">:</span>
  <span class="token key atrule">schemas</span><span class="token punctuation">:</span>
    <span class="token key atrule">product_id</span><span class="token punctuation">:</span>
      <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;The unique identifier of a product in our catalog&quot;</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> integer
      <span class="token key atrule">format</span><span class="token punctuation">:</span> int64
</code></pre></div><p>This doesn&#39;t do anything by itself, but now you can reference this piece by its path in the JSON <code>#/components/schemas/product_id</code></p><div class="language-php"><pre><code>    <span class="token comment">/**
     * @OA\\Property(ref=&quot;#/components/schemas/product_id&quot;)
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$id</span><span class="token punctuation">;</span>
</code></pre></div><p>For more tips on refs, browse through the <a href="https://github.com/zircote/swagger-php/tree/master/Examples/using-refs" target="_blank" rel="noopener noreferrer">using-refs example</a>.</p><h2 id="composition" tabindex="-1">Composition <a class="header-anchor" href="#composition" aria-hidden="true">#</a></h2><p>You can combine model definitions into new schema compositions with <a href="https://swagger.io/specification/#schemaComposition" target="_blank" rel="noopener noreferrer">allOf</a></p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Schema(
 *   schema=&quot;UpdateItem&quot;,
 *   allOf={
 *     @OA\\Schema(ref=&quot;#/components/schemas/NewItem&quot;),
 *     @OA\\Schema(
 *       @OA\\Property(property=&quot;id&quot;, type=&quot;integer&quot;),
 *       @OA\\Property(property=&quot;created_at&quot;, ref=&quot;#/components/schemas/BaseModel/properties/createdAt&quot;)
 *     )
 *   }
 * )
 */</span>
</code></pre></div><p>More info in the <a href="https://swagger.io/docs/specification/data-models/inheritance-and-polymorphism/" target="_blank" rel="noopener noreferrer">Inheritance and Polymorphism</a> chapter.</p><h2 id="array-parameters-in-query" tabindex="-1">Array parameters in query <a class="header-anchor" href="#array-parameters-in-query" aria-hidden="true">#</a></h2><p>Depending on <a href="https://swagger.io/specification/#style-values" target="_blank" rel="noopener noreferrer">style-values</a> <code>@OA\\Parameter(in=&quot;query&quot;, name=&quot;param&quot;, ...)</code> might create urls like this: <code>path?param=123&amp;param=abc</code> which doesn&#39;t work when reading the param values in php.</p><p>The solution is to change the name <code>param</code> into <code>param[]</code> which will create <code>path?param[]=123&amp;param[]=abc</code> and results in an php array.</p><h2 id="vendor-extensions" tabindex="-1">Vendor extensions <a class="header-anchor" href="#vendor-extensions" aria-hidden="true">#</a></h2><p>The specification allows for <a href="http://swagger.io/specification/#vendorExtensions" target="_blank" rel="noopener noreferrer">custom properties</a> as long as they start with &quot;x-&quot;. Therefore all swagger-php annotations have an <code>x</code> property which will unfold into &quot;x-&quot; properties.</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Info(
 *   title=&quot;Example&quot;,
 *   version=&quot;1.0.0&quot;,
 *   x={
 *     &quot;some-name&quot;: &quot;a-value&quot;,
 *     &quot;another&quot;: 2,
 *     &quot;complex-type&quot;: {
 *       &quot;supported&quot;:{
 *         {&quot;version&quot;: &quot;1.0&quot;, &quot;level&quot;: &quot;baseapi&quot;},
 *         {&quot;version&quot;: &quot;2.1&quot;, &quot;level&quot;: &quot;fullapi&quot;},
 *       }
 *     }
 *   }
 * )
 */</span>
</code></pre></div><h4 id="results-in-3" tabindex="-1">Results in: <a class="header-anchor" href="#results-in-3" aria-hidden="true">#</a></h4><div class="language-yaml"><pre><code><span class="token key atrule">openapi</span><span class="token punctuation">:</span> 3.0.0
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> Example
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">x-some-name</span><span class="token punctuation">:</span> a<span class="token punctuation">-</span>value
  <span class="token key atrule">x-another</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">x-complex-type</span><span class="token punctuation">:</span>
    <span class="token key atrule">supported</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;1.0&quot;</span>
        <span class="token key atrule">level</span><span class="token punctuation">:</span> baseapi
      <span class="token punctuation">-</span> <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>
        <span class="token key atrule">level</span><span class="token punctuation">:</span> fullapi
</code></pre></div><p>The <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html" target="_blank" rel="noopener noreferrer">Amazon API Gateway</a> for example, makes use of these.</p><h2 id="openapi" tabindex="-1">OpenApi <a class="header-anchor" href="#openapi" aria-hidden="true">#</a></h2><p>To learn about what you can generate, which options to use and how, look at the <a href="https://swagger.io/docs/" target="_blank" rel="noopener noreferrer">docs on swagger.io</a></p><p>It has sections about:</p><ul><li><a href="https://swagger.io/docs/specification/basic-structure/" target="_blank" rel="noopener noreferrer">Basic structure</a></li><li><a href="https://swagger.io/docs/specification/describing-parameters/" target="_blank" rel="noopener noreferrer">Describing parameters</a></li><li><a href="https://swagger.io/docs/specification/describing-responses/" target="_blank" rel="noopener noreferrer">Describing responses</a></li><li>and <a href="https://swagger.io/docs/specification/about/" target="_blank" rel="noopener noreferrer">more</a></li></ul><p>For more detailed information look at the <a href="http://swagger.io/specification/" target="_blank" rel="noopener noreferrer">OpenApi Specification</a></p>`,90),p=[o];function i(c,r,l,u,d,h){return e(),a("div",null,p)}var m=n(t,[["render",i]]);export{g as __pageData,m as default};
