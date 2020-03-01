export type WorkinHours = {
  start?: string;
  end?: string;
};
export default interface Metro {
  map_image_url?: string;
  map_image_page_url?: string;
  map_attribution?: string;
  map_attribution_html?: string;
  attribution_required?: boolean;
  working_hours: WorkinHours;
}
