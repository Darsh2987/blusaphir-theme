<?php /* Template Name: Events */?>

<?php get_header()?>

<!-- Loop to get the page title -->
<div class="page-title">
  <?php
    while(have_posts()) {
      the_post(); ?>
      <h1><?php the_title(); ?></h1>
    <?php }
  ?>
</div>
<!-- End of Loop to get the page title -->

<!-- Loop to show all events posts as a grid gallery -->
<section class="events-grid">
  <?php 
    $artistDigiBlus = new WP_Query(array(
      'post_type' => 'post',
      'posts_per_page' => -1,
      'category_name' => 'events'
    ));

    while($artistDigiBlus->have_posts()) {
      $artistDigiBlus->the_post(); ?>
        <div>
          <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
        </div>
    <?php }
  ?>
</section>
<!-- End of loop to show all events posts as a grid gallery -->    

<?php get_footer()?>