interface model {
  status: string;
  model: {
    values: {
      min: number;
      max: number;
      fee: number;
      free_months: number;
    };
    config: {
      currency_symbol: string;
      currency: string;
    };
    presets: [
      {
        label: string;
        amount: number;
      }
    ];
  };
  texts: {
    calculator: {
      title: string;
      max_exceeded: string | null;
      min_not_reached: string | null;
      cap_message: string | null;
      button_title: string;
      alert: null | {
        message: string;
        tooltip: string;
      };
    };
    init_modal: null | {
      is_open: boolean;
      closable: boolean;
      title: string;
      body: string;
      first_button: {
        title: string;
        deeplink: string | null;
      };
      second_button: null | {
        title: string;
        deeplink: string | null;
      };
      image_key: string;
    };
    finish_modal: null | {
      is_open: boolean;
      closable: boolean;
      title: string;
      body: string;
      first_button: null | {
        title: string;
        deeplink: string | null;
      };
      second_button: {
        title: string;
        deeplink: string | null;
      };
      image_key: string;
    };
    card_info: null | {
      image: string;
      text: string;
    };
  };
}
